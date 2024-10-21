const cardanoWasm = require('@emurgo/cardano-serialization-lib-nodejs');
const {derivePath, getPublicKey} = require('ed25519-hd-key');
const cbor = require('cbor');
const BigNumber = require('bignumber.js');
const base58 = require('./base58.js');

export function createAdadAddress(parma: any) {
    const {
        seedHex,
        receiveOrChange,
        addresIndex,
        network
    } = parma;
    const key = derivePath("m/44'/1815'/0'/" + addresIndex + "'", seedHex);
    //false: 不带0x00
    let publicKey = getPublicKey(key.key, false);
    let baseAddr = cardanoWasm.BaseAddress.new(
        network,//1:mainnet ,0:testnet
        cardanoWasm.StakeCredential.from_keyhash(cardanoWasm.PublicKey.from_bytes(publicKey).hash()),//表示地址的所有者，用于支付或者质押
        cardanoWasm.StakeCredential.from_keyhash(cardanoWasm.PublicKey.from_bytes(publicKey).hash())//表示地址的所有者，用于支付或者质押
    )
    return {
        privateKey: Buffer.from(key.key).toString('hex'),
        publicKey: publicKey.toString('hex'),
        address: baseAddr.to_address().to_bech32()
    }

}


export function signAdaTransaction(params: any) {
    const {
        privateKey,
        signObj,
        network
    } = params

    const transInputs = cardanoWasm.TransactionInputs.new()
    const transOutputs = cardanoWasm.TransactionOutputs.new()

    signObj.inputs.map((input: any) => {
        const txBytes = Uint8Array.from(
            Buffer.from(input.txid, 'hex')
        );
        const txIdHash = cardanoWasm.TransactionHash.from_bytes(txBytes);
        transInputs.add(cardanoWasm.TransactionInput.new(txIdHash, input.vout));
    });
    signObj.outputs.map((output: any) => {
        const addr = getCardanoAddress(output.address);
        const amount = BigNumber(output.amount).times(Math.pow(10, output.decimal)).toString();
        transOutputs.add(cardanoWasm.TransactionOutput.new(addr,
            cardanoWasm.Value.new(cardanoWasm.BigNum.from_str(amount))
        ));
    });
    const txBodyTmp = cardanoWasm.TransactionBody.new(
        transInputs,
        transOutputs,
        cardanoWasm.BigNum.from_str(signObj.fee), // 手续费
        signObj.expiration // 过期区块
    );
    const transHash = cardanoWasm.hash_transaction(txBodyTmp);
    const witnesses = cardanoWasm.TransactionWitnessSet.new();
    const vKeyNesses = cardanoWasm.Vkeywitnesses.new();
    // 签名
    const priv = cardanoWasm.PrivateKey.from_normal_bytes(
        Uint8Array.from(
            Buffer.from(privateKey, 'hex')
        )
    );
    const vkeys = cardanoWasm.make_vkey_witness(transHash, priv);
    vKeyNesses.add(vkeys);
    witnesses.set_vkeys(vKeyNesses);
    const txRaw = cardanoWasm.Transaction.new(txBodyTmp, witnesses, undefined);
    const cbHex = cbor.encode([
        Buffer.from(txRaw.to_bytes()).toString('hex'),
        {operations: []}
    ]).toString('hex');
    return cbHex;
}

export function verifyAdaAddress(params: { address: string; network: string; }) {
    const {address} = params;
    const regexAddr = new RegExp('^(addr|Ddz|Ae)[a-zA-Z0-9]{54,108}$');
    if (!regexAddr.test(address)) return false;
    try {
        if (address.startsWith('addr')) {
            cardanoWasm.Address.from_bech32(address);
            return true;
        } else if (address.startsWith('Ae2')) {
            cardanoWasm.ByronAddress.from_base58(address);
            return true;
        } else if (address.startsWith('Ddz')) {
            cardanoWasm.ByronAddress.from_bytes(base58.decode(address));
            return true;
        }
        return false;
    } catch (_) {
        return false;
    }
}

export function importAdaAddress(params: { privateKey: string; network: number; }) {
    const {privateKey, network} = params;
    const priv = cardanoWasm.PrivateKey.from_normal_bytes(Uint8Array.from(Buffer.from(privateKey, 'hex')));
    const baseAddr = cardanoWasm.BaseAddress.new(
        network, // 0: testnet, 1: mainnet
        cardanoWasm.StakeCredential.from_keyhash(cardanoWasm.PublicKey.from_bytes(priv.to_public().as_bytes()).hash()),
        cardanoWasm.StakeCredential.from_keyhash(cardanoWasm.PublicKey.from_bytes(priv.to_public().as_bytes()).hash())
    );
    return baseAddr.to_address().to_bech32();
}

/**
 * 获取转换地址
 * @param address
 * @returns
 */
function getCardanoAddress(address: string): any {
    if (address.startsWith('addr') || address.startsWith('addr_test')) {
        return cardanoWasm.Address.from_bech32(address);
    } else if (address.startsWith('Ae2')) {
        return cardanoWasm.ByronAddress.from_base58(address).to_address();
    } else if (address.startsWith('Ddz')) {
        return cardanoWasm.ByronAddress.from_bytes(base58.decode(address)).to_address();
    }
    return null;
}