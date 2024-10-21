import algosdk from "algosdk";
import tweetnacl from "tweetnacl";

const axios = require('axios');

const {derivePath} = require('ed25519-hd-key');
const BigNumber = require("bignumber.js");

export function createAlgoAddress(param: any) {
    const {
        seedHex,
        addressIndex,
    } = param;
    const {key} = derivePath("m/44'/283'/0'/" + addressIndex + "'", seedHex);
    const {publicKey, secretKey} = tweetnacl.sign.keyPair.fromSeed(Uint8Array.from(key))
    return {
        privateKey: Buffer.from(secretKey).toString('hex'),
        publicKey: Buffer.from(publicKey).toString('hex'),
        address: algosdk.encodeAddress(publicKey)
    }
}

/**
 * address
 * network type
 * @param params
 */
export function verifyAlgoAddress(params: any) {
    const {address} = params;
    return algosdk.isValidAddress(address);
}

/**
 * import address
 * private key
 * network
 * @param params
 */
export function importAlgoAddress(params: any) {
    const {privateKey} = params;
    const bufferKey = Uint8Array.from(Buffer.from(privateKey, 'hex'));
    const {publicKey} = tweetnacl.sign.keyPair.fromSecretKey(bufferKey);
    return algosdk.encodeAddress(publicKey);
}

export async function signAlgoTransaction(params: any) {
    const {
        privateKey,
        signObj
    } = params;
    const decimals = new BigNumber(10).pow(Number(signObj.decimal));
    const amountBig = new BigNumber(signObj.amount).times(decimals);
    const amount = amountBig.toNumber(); // 最小单位

    // 构造交易
    const enc = new TextEncoder();
    const note = signObj.note ? enc.encode(signObj.note) : undefined;
    const txn = algosdk.makePaymentTxnWithSuggestedParams(
        signObj.from,
        signObj.to,
        amount,
        undefined,
        note,
        signObj.params
    );

    const privKey = Uint8Array.from(Buffer.from(privateKey, 'hex'));
    const signedTxn = algosdk.signTransaction(txn, privKey);

    // 打印并返回签名后的交易
    console.dir(signedTxn.blob, { depth: null, maxArrayLength: null });
    return Buffer.from(signedTxn.blob).toString('hex'); // 返回签名后的交易数据
}


/**
 * 直接发送bcs编码的二进制数据交易
 * Content-Type: application/x.aptos.signed_transaction+bcs
 * @param bcsTxn
 */
export async function submitTransaction(bcsTxn: Uint8Array) {
    try {
        const response = await axios.post(
            'https://testnet-api.4160.nodely.dev/v2/transactions/async',
            bcsTxn
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Transaction submitted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting transaction:', error);
        throw error;
    }
}