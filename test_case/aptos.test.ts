import {createHdAddress, pubKeyToAddress} from "../src/aptos/address"
import {signTransaction, submitTransaction} from "../src/aptos/sign"
import {describe, test} from '@jest/globals'; // 使用 Jest 提供的 describe 和 test

import * as buffer from "buffer";

const bip39 = require("bip39")


describe('avalanche wallet test libs', () => {
    test('create address', async () => {
        const mnemonic = ""

        const seed = bip39.mnemonicToSeedSync(mnemonic)
        const account = createHdAddress(seed.toString("hex"), "0")
        console.log(account)
    });

    test('public key to address', async () => {
        const param = {
            pubKey: ""
        }
        const address = pubKeyToAddress(param)
        console.log("address==", address)
    });

    test('sign transaction', async () => {
        //wallet 0
        // privateKey: '',
        // publicKey: '',
        //  address: ''
        //wallet 1
        // privateKey: '',
        //publicKey: '',
        //address: ''
        const param = {
            from: "",
            amount: "0.1",
            to: "",
            decimal: 8,
            sequenceNumber: 0,
            gasLimit: 21000,
            gasUnitPrice: 150,
            expireTimestamp: Math.floor(Date.now() / 1000) + 600,
            chainId: 2,
            privateKey: ""
        }
        const sign_tx = await signTransaction(param)
        const result = await submitTransaction(sign_tx.bcsTxn)
        console.log('result:\n', result)
    });
});

