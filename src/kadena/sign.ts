import {CreateOfflineSignTx} from '@/lib/lib.kda.tx'

const BigNumber = require("bignumber.js");
let nacl = require('tweetnacl');


const chains = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
//最大安全数
const MAX_AMOUNT_SAFE = Number.MAX_SAFE_INTEGER;

export async function signTransaction(params: any) {
    const {
        txObj: {toPub, from, to, amount, chainId, targetChainId, gasPrice, gasLimit, decimal, spv, pactId},
        network,
        privs
    } = params;
    const decimals = new BigNumber(10).pow(Number(decimal))
    const amountBig = new BigNumber(amount).times(decimals)

    if (amountBig.toString().indexOf('.') != -1 || amountBig.comparedTo(new BigNumber(MAX_AMOUNT_SAFE)) > 0 || amountBig.comparedTo(new BigNumber(0)) <= 0) {
        throw new Error(`参数错误: 转账数额无效(${amountBig.toString()})`)
    }

    if (chains.indexOf(chainId.toString()) == -1) {
        throw new Error(`chainId 错误, 请选择 0 到 19`)
    }
    if (chains.indexOf(targetChainId.toString()) == -1) {
        throw new Error(`targetChainId 错误, 请选择 0 到 19`)
    }
    if (!privs || privs.length == 0) {
        throw new Error('must have private key')
    }
    let keypair = nacl.sign.keyPair.fromSecretKey(new Uint8Array(Buffer.from(privs[0].key, 'hex')))
    const sendPublickey = Buffer.from(keypair.publicKey).toString('hex')
    //判断私钥长度是否为64位
    const privateKey = privs?.[0]?.key.length === 64 ? privs?.[0]?.key : privs?.[0]?.key.slice(0, 64);
    const networkId = network === "main_net" ? 'mainnet01' : 'testnet04';
    if (chainId === targetChainId) {
        //同链交易
        let method = 'transferOffline'
        if (toPub && toPub.length === 64) {
            //接收方的公钥还没有在链上注册，尚未进行过任何交易
            method = 'transferCreateOffline'
        }
        const params = {
            SignObj: {
                sender: from,
                senderPubKey: sendPublickey,
                senderSecretKey: privateKey,
                receiver: to,
                receiverPubKey: toPub,
                amount: amount,
                chainId: chainId.toString(),
                targetChainId: targetChainId.toString(),
                networkId: networkId,
                gasPrice: Number(gasPrice),
                gasLimit: gasLimit,
                spv: "",
                pactId: "",
            },
            method: method,
        }
        return JSON.stringify(CreateOfflineSignTx(params))
    } else {
        //跨链交易
        const params = {
            SignObj: {
                sender: from,
                senderPubKey: sendPublickey,
                senderSecretKey: privateKey,
                receiver: to,
                receiverPubKey: toPub,
                amount: amount,
                chainId: chainId.toString(),
                targetChainId: targetChainId.toString(),
                networkId: networkId,
                gasPrice: Number(gasPrice),
                gasLimit: gasLimit,
                spv: spv,
                pactId: pactId,
            },
            method: 'crossTransferOffline',
        }
        return JSON.stringify(CreateOfflineSignTx(params))
    }

}