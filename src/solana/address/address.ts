import * as SPLToken from '@solana/spl-token';
import {Keypair, NONCE_ACCOUNT_LENGTH, NonceAccount, PublicKey, SystemProgram, Transaction} from '@solana/web3.js';
import * as buffer from "buffer";

const bs58 = require('bs58');
const {derivePath, getPublicKey} = require('ed25519-hd-key');
const BigNumber = require('bignumber.js');

export function createSolAddress(seedHex: string, addressIndex: string) {
    //生成私钥
    const {key} = derivePath("m/44'/501'/4'/" + addressIndex + "'", seedHex);
    //生成公钥，false代表不带0x
    const publicKey = getPublicKey(new Uint8Array(key), false).toString('hex')
    //将公钥转为buffer
    const buffer = Buffer.from(getPublicKey(new Uint8Array(key), false).toString('hex'), 'hex');
    const address = bs58.encode(buffer);
    const hdWallet = {
        privatekey: key.toString('hex') + publicKey,
        publicKey,
        address
    }
    return JSON.stringify(hdWallet)
}

/**
 * 创建nonce account
 * @param params
 */
export async function prepareAccount(params: any) {
    const {
        authorAddress, from, recentBlockhash, minBalanceForRentExemption, privs,
    } = params;

    const authorPrivateKey = (privs?.find((ele: { address: any; }) => ele.address === authorAddress))?.key;
    if (!authorPrivateKey) throw new Error("authorPrivateKey 为空");
    const nonceAcctPrivateKey = (privs?.find((ele: { address: any; }) => ele.address === from))?.key;
    if (!nonceAcctPrivateKey) throw new Error("nonceAcctPrivateKey 为空");

    const author = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, "hex")));
    const nonceAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(nonceAcctPrivateKey, "hex")));


    let tx = new Transaction();
    tx.add(
        SystemProgram.createAccount({
            fromPubkey: author.publicKey,
            newAccountPubkey: nonceAccount.publicKey,
            lamports: minBalanceForRentExemption,
            space: NONCE_ACCOUNT_LENGTH,
            programId: SystemProgram.programId,
        }),

        SystemProgram.nonceInitialize({
            noncePubkey: nonceAccount.publicKey,
            authorizedPubkey: author.publicKey,
        })
    );
    tx.recentBlockhash = recentBlockhash;


    tx.sign(author, nonceAccount);
    return tx.serialize().toString("base64");
}

/**
 * address
 * network type
 * @param params
 */
export function verifySolAddress(params: any) {
    const {address} = params;
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
}

export function importSolAddress(params: any) {
    const {privateKey} = params;
    const keyPairs = Keypair.fromSecretKey(Buffer.from(privateKey, 'hex'));
    return bs58.encode(keyPairs.publicKey);
}


// @ts-ignore
export function pubKeyToAddress({pubKey}): string {
    if (pubKey.length !== 64) {
        throw new Error("public key length Invalid");
    }
    const buffer = Buffer.from(pubKey, "hex");
    return bs58.encode(buffer);
}

// @ts-ignore
export function privateKeyToAddress({privateKey}): string {
    const bufferPriv = Buffer.from(privateKey, "hex");
    const keypairs = Keypair.fromSecretKey(bufferPriv);
    return bs58.encode(keypairs.publicKey);
}


function hexToUint8Array(hexString: string) {
    // 确保输入是一个有效的十六进制字符串
    if (!/^[0-9a-fA-F]+$/.test(hexString)) {
        throw new Error('Provided string is not a valid hex string.');
    }
    // 创建一个 Uint8Array，长度为十六进制字符串的一半
    const byteArray = new Uint8Array(hexString.length / 2);
    // 将十六进制字符串转换为字节数组
    for (let i = 0; i < byteArray.length; i++) {
        byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
}

export function deCode(bs58code: string) {
    if (isBase58(bs58code)) {
        let decodeResult = NonceAccount.fromAccountData(Buffer.from(bs58code))
        // return bs58.decode(base58data)
        return decodeResult
    } else {
        return null
    }
}

export function convertPrivateKey(privateKey: string): string {
    if (isBase58(privateKey)) {
        return base58ToHex(privateKey);
    } else if (/^[0-9a-fA-F]{64}$/.test(privateKey)) { // 检查是否是 64 位十六进制字符串
        return privateKey;
    } else {
        throw new Error('Invalid private key format. Expected Base58 or 64-character hex string.');
    }
}

function isBase58(str: string) {
    const base58Regex = /^[1-9A-HJ-NP-Za-km-z]+$/;
    return base58Regex.test(str);
}

function base58ToHex(base58String: string) {
    // 将 Base58 字符串解码为字节数组
    const byteArray = bs58.decode(base58String);
    // 将字节数组转换为十六进制字符串
    return byteArray.toString('hex');
}