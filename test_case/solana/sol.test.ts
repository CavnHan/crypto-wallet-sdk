const bip39 = require("bip39")
import {createSolAddress, prepareAccount, convertPrivateKey, deCode} from "@/solana/address/address";
import {NonceAccount} from "@solana/web3.js";

const bs58 = require('bs58');
const {PublicKey} = require('@solana/web3.js');
const BN = require('bn.js');


describe('solana unit test case', () => {

    test('createAddress', () => {


        const mnemonic = "your mnemonic"
        const seed = bip39.mnemonicToSeedSync(mnemonic)
        const account = createSolAddress(seed.toString("hex"), "0")
        console.log(account)
    })

    test('test bs58 to hex', () => {
        const bs58str = ''
        const str = convertPrivateKey(bs58str)
        expect(str).toBe('')
        console.log("转换结果：", str)
    })

    test('prepareAccount', async () => {
        const params = {
            //验证账户地址，用于发送交易部署nonce账户
            authorAddress: "",
            //需要创建的nonce账户地址
            from: "",
            //最新区块hash
            recentBlockhash: "",
            //最小租赁金额
            minBalanceForRentExemption: 1447680,
            privs: [
                {
                    //验证账户地址
                    address: "",
                    //验证账户私钥
                    key: ""
                },
                {
                    //nonce账户地址
                    address: "",
                    //nonce账户私钥
                    key: ""
                }
            ]
        }
        let tx_msg = await prepareAccount(params)
        console.log("tx_msg===\n", tx_msg)
    });

    test("decode account info", () => {
        const accountInfo = ''
        const decodeResult = deCode(accountInfo)
        console.log("decodeResult===\n", decodeResult)
    })

    test("decode bn", () => {
        // 你的十六进制公钥
        const hexPublicKey = '';

// 将十六进制公钥转换为 Buffer
        const bufferPublicKey = Buffer.from(hexPublicKey, 'hex');

// 创建 PublicKey 对象
        const publicKey = new PublicKey(bufferPublicKey);

// 输出 Base58 编码的公钥
        const base58PublicKey = publicKey.toBase58();
        console.log('Base58 编码公钥:', base58PublicKey);

// 将 Base58 编码的公钥转换回 BN 大数
        const bnValue = new BN(publicKey.toBuffer(), 'be');

// 输出 BN 大数的十六进制表示
        console.log('BN 大数十六进制:', bnValue.toString('hex'));
    })

})