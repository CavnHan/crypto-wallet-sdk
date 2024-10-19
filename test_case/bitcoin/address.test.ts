import bip39 = require("bip39")
import {
    createAddress,
    createSchnorrAddress,
    createMultiSignAddress,
    CreateMultiSigAddressParams,
    CreateAddressParams
} from "@/bitcoin";
import * as assert from 'assert';

describe('btc unit test case', () => {
    test('createAddress by p2pkh bitcoin', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const params: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2pkh"
        }
        const account = createAddress(params)
        console.log("p2pkh账户地址：", account.address)
        console.log("p2pkh私钥：", account.privateKey)
        console.log("p2pkh公钥：", account.publicKey)
        assert.strictEqual(account.address, '')
        assert.strictEqual(account.privateKey, '')
        assert.strictEqual(account.publicKey, '')
    })

    test('createAddress by p2pkh testnet', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const params: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2pkh"
        }
        const account = createAddress(params)
        assert.strictEqual(account.address, '');
        assert.strictEqual(account.privateKey, '');
        assert.strictEqual(account.publicKey, '');
    })

    test('createAddress by p2wpkh bitcoin', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2wpkh"
        }
        const account = createAddress(param)
        assert.strictEqual(account.address, '');
        assert.strictEqual(account.privateKey, '');
        assert.strictEqual(account.publicKey, '');
    });

    test('createAddress by p2wpkh testnet', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2wpkh"
        }
        const account = createAddress(param)
        console.log('p2wpkh 测试网账户地址：', account.address)
        console.log('p2wpkh 测试网私钥：', account.privateKey)
        console.log('p2wpkh 测试网公钥：', account.publicKey)
        assert.strictEqual(account.address, '');
        assert.strictEqual(account.privateKey, '');
        assert.strictEqual(account.publicKey, '');
    });

    test('createAddress by p2sh bitcoin', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2sh"
        }
        const account = createAddress(param)
        assert.strictEqual(account.address, '');
        assert.strictEqual(account.privateKey, '');
        assert.strictEqual(account.publicKey, '');
    });

    test('createAddress by p2sh testnet', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2sh"
        }
        const account = createAddress(param)
        console.log('p2sh 测试网账户地址：', account.address)
        console.log('p2sh 测试网私钥：', account.privateKey)
        console.log('p2sh 测试网公钥：', account.publicKey)
        assert.strictEqual(account.address, '');
        assert.strictEqual(account.privateKey, '');
        assert.strictEqual(account.publicKey, '');
    });

    test('createAddress by p2tr maninet', () => {
        const mnemonic = "your mnemonic";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: "0",
            network: "mainnet",
        }
        const account = createSchnorrAddress(param)
        console.log(account.address);
        console.log(account.privateKey);
        console.log(account.publicKey);
    });

    test('p2pkh multi sign 3-2 address', () => {
        const params: CreateMultiSigAddressParams = {
            pubkeys: [
                '',
                '',
                '',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2pkh",
            threshold: 2
        }
        const address: string = createMultiSignAddress(params)
        console.log("p2pkh多签地址：", address)
        assert.strictEqual(address, '');
    })

    test('p2wpkh multi sign 3-2 address', () => {
        const param:CreateMultiSigAddressParams = {
            pubkeys: [
                '',
                '',
                '',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2wpkh",
            threshold: 2
        }
        const address = createMultiSignAddress(param)
        assert.strictEqual(address, '');
    });

    test('p2sh multi sign 3-2 address', () => {
        const param:CreateMultiSigAddressParams = {
            pubkeys: [
                '',
                '',
                '',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2sh",
            threshold: 2
        }
        const address = createMultiSignAddress(param)
        assert.strictEqual(address, '');
    });
})