import * as assert from "node:assert";

const bit39 = require("bip39")
const ethers = require('ethers');
import {createEthAddress, ImportPrivateKeyToAddress, ImportPublickeyToAddress} from "@/ethereum/address/address";
import {ethSign, EthSignParams, SignOpMainnetTransactionParams, signOpMainnetTransaction} from "@/ethereum/sign/sign";
// import {publicKeyCombine} from "secp256k1";

describe('ethereum wallet test', () => {
    test('mpc public key to address', () => {
        const pubKeyPoint = [
            2, 211, 154, 205, 237, 94, 172, 44, 10, 252, 232, 165, 187, 22, 53, 235, 218, 108, 26, 42, 122, 130, 38, 45, 110, 233, 154, 55, 141, 135, 170, 96, 220

        ]
        const address = ethers.utils.computeAddress("0x" + Buffer.from(pubKeyPoint).toString('hex'))
        console.log("wallet address:", address);
    })

    test('createAddress', () => {
        const mnemonic = "";
        const seed = bit39.mnemonicToSeedSync(mnemonic);
        let result = createEthAddress(seed, '0');
        console.log(result);
        assert.strictEqual("", JSON.parse(result).address);
    })

    test('importprivatekey to address', () => {
        const privateKey = ""
        let result = ImportPrivateKeyToAddress(privateKey);
        assert.strictEqual("", JSON.parse(result).address);

    })

    test('importpublickey to address', () => {
        const publickey = '';
        let result = ImportPublickeyToAddress(publickey);
        assert.strictEqual("", result);
    });

    test('sign eth by holesky', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 2,
            "from": "",
            "to": "",
            "gasLimit": 21000,
            "amount": "0.1",
            "gasPrice": 10000000000,
            "decimal": 18,
            "chainId": 17000,//holesky
            "tokenAddress": "0x00"
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });

    test('sign eth by sepolia', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 5,
            "from": "",
            "to": "",
            "gasLimit": 21000,
            "amount": "0.1",
            "gasPrice": 280000000000,
            "decimal": 18,
            "chainId": 11155111,//sepolia
            "tokenAddress": "0x00"
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });


    test('sign nft', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 12,
            "from": "",
            "to": "",
            "gasLimit": 21000,
            "amount": "0.01",
            "gasPrice": 3919237255,
            "decimal": 18,
            "chainId": 10,
            "tokenAddress": "0x00"
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });

    test('sign eth eip1559 sepolia', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 6,
            "from": "",
            "to": "",
            "amount": "0.1",
            "gasLimit": 21000,
            "maxFeePerGas": 380000000000,
            "maxPriorityFeePerGas": 10000000000,
            "decimal": 18,
            "chainId": 11155111,
            "tokenAddress": "0x00"
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });

    test('sign eth eip1559 by holesky', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 3,
            "from": "",
            "to": "",
            "amount": "0.01",
            "gasLimit": 21000,
            "maxFeePerGas": 2900000000,
            "maxPriorityFeePerGas": 2600000000,
            "decimal": 18,
            "chainId": 1,
            "tokenAddress": "0x00"
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });

    test('sign usdt eip1559', async () => {
        const params: EthSignParams = {
            "privateKey": "",
            "nonce": 45,
            "from": "",
            "to": "",
            "amount": "0.01",
            "gasLimit": 120000,
            "maxFeePerGas": 2900000000,
            "maxPriorityFeePerGas": 2600000000,
            "decimal": 6,
            "chainId": 1,
            "tokenAddress": ""
        }
        const rawHex = ethSign(params)
        console.log(rawHex)
    });

    test('sign eth by ganache', async () => {
        const parmas: SignOpMainnetTransactionParams = {
            "privateKey": "",
            "nonce": 0,
            "from": "",
            "to": "",
            "gasLimit": 60000,
            "amount": "5",
            "gasPrice": 20000000000,
            "decimal": 18,
            // "chainId": 5777,
            "chainId": 1337,
            "tokenAddress": "",
            "tokenId": "0x00"
        }
        const rawHex = await signOpMainnetTransaction(parmas)
        console.log(rawHex)
    });

    test('sign nft by ganache', async () => {
        const parmas: SignOpMainnetTransactionParams = {
            "privateKey": "",
            "nonce": 0,
            "from": "",
            "to": "",
            "gasLimit": 60000,
            "amount": "5",
            "gasPrice": 20000000000,
            "decimal": 18,
            // "chainId": 5777,
            "chainId": 1337,
            "tokenAddress": "",
            "tokenId": "0x00"
        }
        const rawHex = await signOpMainnetTransaction(parmas)
        console.log(rawHex)
    });
})