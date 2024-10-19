import {createSuiAddress, importSuiAddress, verifySuiAddress} from '../src/sui/address';
import {signSuiTransaction} from '../src/sui/sign'
import {describe, test} from '@jest/globals'; // 使用 Jest 提供的 describe 和 test
const bip39 = require('bip39');


describe('sui unit test case', () => {
    test('create sui address', async () => {
        const mnemonic = ''
        const params = {
            mnemonic: mnemonic,
            password: ''
        };
        const seed = await bip39.mnemonicToSeed(params.mnemonic);
        const account = createSuiAddress(seed.toString('hex'), '0', '0', 'mainnet');
        console.log(account);
    });
    test('import sui Address', () => {
        const params = {
            privateKey: "",
            network: "mainnet"
        }
        const account = importSuiAddress(params)
        console.log(account)
    });

    test('verify sui address', async () => {
        const params = {
            address: "",
            network: "mainnet"
        }
        let verifyRes = verifySuiAddress(params)
        console.log(verifyRes);
    });

    test('sign', async () => {
        const data = {
            "from": "",
            "outputs": [
                {
                    "requestId": "cavn01",
                    "to": "",
                    "amount": "0.1017"
                },
                {
                    "requestId": "cavn02",
                    "to": "",
                    "amount": "1.17"
                }
            ],
            "decimal": 9,
            "coinRefs": [
                {
                    "objectId": "",
                    "version": 226080016,
                    "digest": ""
                }
            ],
            "gasBudget": 9580000,
            "gasPrice": 2000
        };
        const rawHex = await signSuiTransaction({
            privateKey: "",
            secretkey: "", //bech32 格式的私钥
            signObj: data,
            network: "mainnet"
        });
        console.log(rawHex);
    })

    test('sign wiht new ', async () => {
        const data = {
            "from": "",
            "outputs": [
                {
                    "requestId": "",
                    "to": "",
                    "amount": "0.1017"
                },
                {
                    "requestId": "",
                    "to": "",
                    "amount": "1.1"
                }
            ],
            "decimal": 9,
            "coinRefs": [
                {
                    "objectId": "",
                    "version": 226080017,
                    "digest": ""
                }
            ],
            "gasBudget": 9580000,
            "gasPrice": 2000
        };
        const rawHex = await signSuiTransaction({
            privateKey: "",
            signObj: data,
            network: "mainnet"
        });
        console.log(rawHex);
    });

});
