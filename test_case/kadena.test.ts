import * as assert from "node:assert";

const bip39 = require("bip39")
import {createKdaAddress, pubKeyToAddress, verifyAddress} from "../src/kadena/address"
import {signTransaction} from "../src/kadena/sign"

describe('address test', () => {
    test('create kda address', () => {
        const mnemonic = ''
        const seed = bip39.mnemonicToSeed(mnemonic)
        const account = createKdaAddress(seed.toString('hex'), '0')
        console.log('account: \n', account)
    })

    test('public key to address', async () => {
        const pubKey = "";
        const address = pubKeyToAddress({pubKey});
        expect("").toEqual(address);
    });

    test('address verify', async () => {
        const address = "";
        const ok = verifyAddress({address});
        expect(ok).toEqual(true);
    });

    test('address verify', async () => {
        console.log(Number.MAX_VALUE)
        console.log(Number.MAX_SAFE_INTEGER)
        console.log(Number.MIN_VALUE)
        console.log(Number.MIN_SAFE_INTEGER)
    })

})

describe('signTransaction()', () => {
    test('mainnet sign transaction test', async () => {
        const privateKey = ''
        const params = {
            txObj: {
                from: '',
                to: '',
                //新地址，未激活，需要传入toPub
                toPub: '',
                amount: '0.001',
                chainId: 2,
                targetChainId: 2,
                gasPrice: '0.0001',
                gasLimit: 800,
                decimal: 12,
                spv: "",
                pactId: "",
            },
            network: 'main_net',
            privs: [{key: privateKey}]
        }
        const tx_sign_msg = await signTransaction(params)
        console.log("tx_sign_msg===\n", tx_sign_msg);
    });


    /**
     * 跨链交易过程
     * 1.不填spv和pactId,签名交易，调用源链（即链2）的rpc节点：广播交易接口，发送交易到链2，注意路径的链id为源链（即链2）
     * 2.拿到步骤1返回的requestkey，调用源链（即链2）的rpc节点：获取spv接口，传入rquestkey和目标链id(即链1)
     * 3.拿到步骤2返回的spv值，填入测试用例的spv参数，将步骤1返回的rquestkey填入pactId参数，调用目标链（即链1）的rpc节点：广播交易接口，发送交易到链1，注意路径的链id为目标链（即链1）
     */
    test('cross chain sign transaction test', async () => {
        const privateKey = ''
        const params = {
            txObj: {
                from: '',
                to: '',
                //新地址，未激活，需要传入toPub
                toPub: '',
                amount: "0.001",
                chainId: 2,
                targetChainId: 1,
                gasPrice: "0.0001",
                gasLimit: 800,
                decimal: 12,
                spv: "",
                pactId: "",
            },
            network: 'main_net',
            privs: [{key: privateKey}]
        }
        const tx_sign_msg = await signTransaction(params)
        console.log("tx_sign_msg===\n", tx_sign_msg);
    });
});