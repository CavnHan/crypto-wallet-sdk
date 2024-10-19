import {toXOnly} from "bitcoinjs-lib/src/psbt/bip371";

const ecc = require('tiny-secp256k1');
const {BIP32Factory} = require('bip32');
const bip32 = BIP32Factory(ecc);
const bitcoin = require('bitcoinjs-lib');
const bitcore = require('bitcore-lib');


interface Input {
    address: string;
    txid: string;
    vout: number;
    amount: number; // satoshis
}

interface Output {
    address: string;
    amount: number; // satoshis
}

interface SignObj {
    inputs: Input[];
    outputs: Output[];
}

export interface BuildAndSignTxParams {
    privateKey: string;
    signObj: SignObj;
    network: string;
}

/**
 * @returns
 * @param params
 */
export function buildAndSignTx(params: BuildAndSignTxParams): string {
    const {privateKey, signObj, network} = params;
    const net = bitcore.Networks[network];
    const inputs = signObj.inputs.map(input => {
        return {
            address: input.address,
            txId: input.txid,
            outputIndex: input.vout,
            // eslint-disable-next-line new-cap
            script: new bitcore.Script.fromAddress(input.address).toHex(),
            satoshis: input.amount
        };
    });
    const outputs = signObj.outputs.map(output => {
        return {
            address: output.address,
            satoshis: output.amount
        };
    });
    const transaction = new bitcore.Transaction(net).from(inputs).to(outputs);
    transaction.version = 2;
    transaction.sign(privateKey);
    return transaction.toString();
}


export function buildUnsignTxAndSign(params: any) {
    const {keyPair, signObj, network} = params;
    const psbt = new bitcoin.Psbt({network});
    //@ts-ignore
    const inputs = signObj.inputs.map(input => {
        return {
            address: input.address,
            txId: input.txid,
            outputIndex: input.vout,
            // eslint-disable-next-line new-cap
            script: new bitcore.Script.fromAddress(input.address).toHex(),
            satoshis: input.amount
        };
    });
    psbt.addInput(inputs);
    //@ts-ignore
    const outputs = signObj.outputs.map(output => {
        return {
            address: output.address,
            satoshis: output.amount
        };
    });
    psbt.addOutput(outputs);
    psbt.toBase64();

    psbt.signInput(0, keyPair);
    psbt.finalizeAllInputs();

    const signedTransaction = psbt.extractTransaction().toHex();
    console.log('signedTransaction==', signedTransaction);
}

export async function signBtcTaprootTransaction(params: any) {
    const {signObj, privateKey} = params
    const psbt = new bitcoin.Psbt({network: bitcoin.networks.bitcoin});
    //@ts-ignore
    const inputs = signObj.inputs.map(input => {
        return {
            hash: input.txid,
            index: 0,
            witnessUtxo: {value: input.amount, script: input.output!},
            tapInternalKey: toXOnly(input.publicKey),
        }
    });
    psbt.addInputs(inputs);

    const sendInternalKey = bip32.fromPrivateKey(privateKey, Buffer.from("0"));
    //@ts-ignore
    const output = signObj.inputs.map(output => {
        return {
            value: output.value,
            address: output.sendAddress!,
            tapInternalKey: output.sendPubKey,
        }
    });

    psbt.addInputs(output);

    const tweakedSigner = sendInternalKey.tweak(
        bitcoin.crypto.taggedHash('TapTweak', toXOnly(sendInternalKey.publicKey)),
    );
    await psbt.signInputAsync(0, tweakedSigner);
    psbt.finalizeAllInputs();
    const tx = psbt.extractTransaction();
    return tx.toBuffer().toString('hex');
}


