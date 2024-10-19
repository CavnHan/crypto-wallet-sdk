import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
import {util} from "protobufjs";
import {Buffer} from 'buffer';
import {SigningStargateClient} from "@cosmjs/stargate";


const bip32 = BIP32Factory(ecc);
const {fromHex, toBase64} = require('@cosmjs/encoding');
const {
    Secp256k1Wallet,
    pubkeyToAddress: atomPubkeyToAddress
} = require('@cosmjs/amino');
const BigNumber = require('bignumber.js');
const {createSendMessage, createTxBody, createTxRawBytes} = require("./proto-tx-service")
const {getSignDoc, getAuthInfo, getDirectSignature} = require("./post-ibc-signer");
const {isValidAddress, verifyChecksum} = require("./validator");


/**
 * get address from seed
 * @param seedHex 种子
 * @param addressIndex 地址索引
 * @param network 网络
 * 将公钥-->base64 编码--> 根据编码判断是 secp256k1 还是 ed25519 的公钥---> sha256---->ripemd160---> bech32 编码
 */
export async function createAtomAddress(seed: Buffer, addressIndex: string, network: string) {
    // const seedBuffer = Buffer.from(seedHex, 'hex')
    // 从种子生成根节点
    const node = bip32.fromSeed(seed)
    const child = node.derivePath("m/44'/118'/0'/0/" + addressIndex + '');
    // const publicKey = Buffer.from(child.publicKey, 'hex');
    const publicKey = child.publicKey
    const prefix = 'cosmos'
    const pubkey = {
        type: 'tendermint/PubKeySecp256k1',
        // value: toBase64(
        //     fromHex(publicKey.toString('hex'))
        // )
        value: toBase64(publicKey)
    }
    // 处理privateKey可能为undefined的情况
    let privateKeyHex = "";
    if (child.privateKey) {
        privateKeyHex = Buffer.from(child.privateKey).toString('hex');
    } else {
        throw new Error("Private key is undefined"); // 或其他处理方式
    }
    const address = atomPubkeyToAddress(pubkey, prefix);


    return {
        privateKey: privateKeyHex,
        publicKey: Buffer.from(child.publicKey).toString('hex'), // 保持一致性，使用 Buffer.from()
        address,
    };
}

export async function importAtomAddress(params: any) {
    const {privateKey} = params;
    const accounts = await Secp256k1Wallet.fromKey(new Uint8Array(Buffer.from(privateKey, 'hex')), 'cosmos');
    const accountList = await accounts.getAccounts();
    const address = accountList[0].address
    return {
        privateKey,
        address
    }
}

export async function publicKeyToAddress(publickey: string) {
    const prefix = 'cosmos';
    const pubkey = {
        type: 'tendermint/PubKeySecp256k1',
        value: toBase64(
            fromHex(publickey)
        )
    };
    return atomPubkeyToAddress(pubkey, prefix);
}

/**
 * 判断是否为有效地址
 * @param params
 */
export function verifyAtomAddress(params: any) {
    const {address} = params;
    const regex = new RegExp('^cosmos[a-zA-Z0-9]{39}$');
    return regex.test(address);
}

export function verifyAddress(params: any): boolean {
    const {address} = params
    try {
        if (!isValidAddress(address) || !verifyChecksum(address)) return false;
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * sign transaction
 * @param params
 * @returns
 */
export async function signAtomTransaction(params: any): Promise<string> {
    const {privateKey, chainId, from, to, memo, amount, fee, gas, accountNumber, sequence, decimal} = params;
    const calcAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toNumber();
    if (calcAmount % 1 !== 0) throw new Error('amount invalid');
    const calcFee = new BigNumber(fee).times(new BigNumber(10).pow(decimal)).toNumber();
    if (calcFee % 1 !== 0) throw new Error('fee invalid');
    const signDoc = {
        msgs: [
            {
                type: 'cosmos-sdk/MsgSend',
                value: {
                    from_address: from,
                    to_address: to,
                    amount: [{amount: BigNumber(amount).times(Math.pow(10, decimal)).toString(), denom: 'uatom'}]
                }
            }
        ],
        fee: {
            amount: [{amount: BigNumber(fee).times(Math.pow(10, decimal)).toString(), denom: 'uatom'}],
            gas: String(gas)
        },
        chain_id: chainId,
        memo: memo || '',
        account_number: accountNumber.toString(),
        sequence: sequence.toString()
    };
    const signer = await Secp256k1Wallet.fromKey(new Uint8Array(Buffer.from(privateKey, 'hex')), 'cosmos');
    const {signature} = await signer.signAmino(from, signDoc);
    const tx = {
        tx: {
            msg: signDoc.msgs,
            fee: signDoc.fee,
            signatures: [signature],
            memo: memo || ''
        },
        mode: 'sync'
    };
    return JSON.stringify(tx);
}

export async function SignV2Transaction(params: any): Promise<string> {
    const {chainId, from, to, memo, amount_in, fee, gas, accountNumber, sequence, decimal, privateKey} = params;

    const amount = BigNumber(amount_in).times(Math.pow(10, decimal)).toString();
    const feeAmount = BigNumber(fee).times(Math.pow(10, decimal)).toString();
    const unit = "uatom";
    if (amount.toString().indexOf(".") !== -1) {
        throw new Error('input amount value invalid.');
    }
    if (feeAmount.toString().indexOf(".") !== -1) {
        throw new Error('input amount value invalid.');
    }
    if (!verifyAddress({address: from}) || !verifyAddress({address: to})) {
        throw new Error('input address value invalid.');
    }
    const sendMessage = createSendMessage(
        from,
        to,
        amount,
        unit
    );
    const messages = [sendMessage];
    const txBody = createTxBody(messages, memo);
    const {pubkey} = await Secp256k1Wallet.fromKey(
        fromHex(privateKey),
        "cosmos"
    );
    const authInfo = await getAuthInfo(
        pubkey,
        sequence.toString(),
        feeAmount,
        unit,
        gas
    );
    const signDoc = getSignDoc(chainId, txBody, authInfo, accountNumber);
    const signature = getDirectSignature(signDoc, fromHex(privateKey));
    const txRawBytes = createTxRawBytes(
        txBody,
        authInfo,
        signature
    );
    const txBytesBase64 = Buffer.from(txRawBytes, 'binary').toString('base64');
    const txRaw = {tx_bytes: txBytesBase64, mode: "BROADCAST_MODE_SYNC"};
    return JSON.stringify(txRaw);
}

// 模拟交易函数
// async function simulateTransaction(txbody:string,params:any) {
//     const {privateKey, from, to, amount, unit, memo} = params;
//     const client = await SigningStargateClient.connectWithSigner(
//         "https://rpc.cosmos.network", // 替换为你的 RPC 地址
//         Secp256k1Wallet.fromKey(fromHex(privateKey), "cosmos") // 使用你的私钥
//     );
//
//     // 创建一个交易消息
//     const msg = createSendMessage(from, to, amount, unit);
//
//     // 模拟交易
//     const result = await client.simulate(from, [msg], {memo});
//     return result.gasInfo.gasUsed; // 返回估算的 gas 使用量
// }
