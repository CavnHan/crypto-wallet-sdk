const bip39 = require("bip39")
import {createSolAddress, prepareAccount, convertPrivateKey, deCode} from "@/solana/address/address";
import {Connection, NonceAccount} from "@solana/web3.js";
import {signSolTransaction, signSolTransaction2} from "@/solana/sign/sign";
import * as SPLToken from '@solana/spl-token';

const bs58 = require('bs58');
const {PublicKey} = require('@solana/web3.js');
const BN = require('bn.js');

describe('sign unit test cae', () => {
    test('sign normal', async () => {
        const authPrivateKey = ''
        const fromPrivateKey = ''
        let from = ''
        let authorAddress = ''
        let to = ''
        let nonceAccountAddress = ''
        let mintAddress = ''
        const params = {
            txObj: {
                from: from,
                amount: "5",
                to: to,
                nonce: "",//最新区块hash或者nonce accoutn的nonce值
                nonceAccountAddress: nonceAccountAddress,
                authorAddress: authorAddress,
                decimal: 6,
                mintAddress: mintAddress,
                txType: "TRANSFER_TOKEN",
                hasCreatedTokenAddr: false //接收方是否已经有ata
            },
            privs: [
                {address: from, key: fromPrivateKey},
                {address: authorAddress, key: authPrivateKey}
            ]
        }
        let tx_msg = await signSolTransaction(params)
        console.log("tx_msg===\n", tx_msg)

    })

    test('sign normal 2', async () => {
        const authPrivateKey = '';
        const fromPrivateKey = '';
        const from = '';
        const authorAddress = '';
        const to = '';
        const nonceAccountAddress = '';
        const mintAddress = '';


        const connection = new Connection("your rpc node", 'confirmed');

        const params = {
            txObj: {
                from: from,
                amount: "5",
                to: to,
                nonce: "",// 使用 connection 获取最新的区块哈希
                nonceAccountAddress: nonceAccountAddress,
                authorAddress: authorAddress,
                decimal: 6,
                mintAddress: mintAddress,
                txType: "TRANSFER_TOKEN",
                hasCreatedTokenAddr: false //接收方是否已经有ata
            },
            privs: [
                {address: from, key: fromPrivateKey},
                {address: authorAddress, key: authPrivateKey}
            ]
        };


        try {
            const tx_msg = await signSolTransaction2(connection, params); // 传递 connection 对象
            console.log("tx_msg===\n", tx_msg);


            // 获取 ATA 地址并打印
            const mint = new PublicKey(mintAddress);
            const fromPubkey = new PublicKey(from);
            const toPubkey = new PublicKey(to);

            const fromTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                fromPubkey
            );
            const toTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                toPubkey
            );


            console.log("fromTokenAccount:", fromTokenAccount.toBase58());
            console.log("toTokenAccount:", toTokenAccount.toBase58());


            // 检查 fromTokenAccount 的余额
            const fromBalance = await connection.getTokenAccountBalance(fromTokenAccount);
            console.log("fromTokenAccount balance:", fromBalance.value.amount);


            // 检查 fromTokenAccount 和 toTokenAccount 的账户信息
            const fromAccountInfo = await connection.getAccountInfo(fromTokenAccount);
            const toAccountInfo = await connection.getAccountInfo(toTokenAccount);

            console.log("fromAccountInfo:", fromAccountInfo);
            console.log("toAccountInfo:", toAccountInfo);


        } catch (error) {
            console.error("测试用例执行出错：", error);
            // 处理错误，例如断言
            throw error; // 重新抛出错误，以便测试运行器可以捕获它
        }
    });

    test('get accoutn nonce with rpc', async () => {
        const connection = new Connection("your rpc node", 'confirmed');
        const nonce = await connection.getNonce(new PublicKey(''))
        console.log("nonce===\n", nonce)
    })
    test('get account nonce with account data', async () => {
        let decodeResult = NonceAccount.fromAccountData(Buffer.from(''))
        console.log("result==\n", decodeResult)
    })

    test('decode nonce',() => {
        //通过rpc节点获取nonce账户的accoutn data 是个base58的字符串，直接放入解码
        const base58Data = 'xxx'
        const decodeResult = NonceAccount.fromAccountData(Buffer.from(base58Data))
        console.log('decodeResult==\n', decodeResult)
    })


})