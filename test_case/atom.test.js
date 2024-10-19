const bip39 = require("bip39")
import {
    createAtomAddress,
    importAtomAddress,
    verifyAddress,
    verifyAtomAddress,
    publicKeyToAddress,
    signAtomTransaction,
    SignV2Transaction
} from "../src/cosmos";

describe("atom uni test", () => {
    test('createAddress', async () => {
        const mnemonic = ""
        const seed = await bip39.mnemonicToSeed(mnemonic)
        // const account = await createAtomAddress(seed.toString("hex"), "0", "mainnet")
        const account = await createAtomAddress(seed, "0", "mainnet")
        console.log(account)
    })
    test('importAddress', async () => {
        const privateKey = ''
        const account = await importAtomAddress({privateKey: privateKey})
        console.log(account)
    })

    test('import public to address', async () => {
        const account = await publicKeyToAddress("")
        console.log(account)
    });

    test('verify atom address', async () => {
        const params = {
            address: "",
            network: "mainnet"
        }
        // let verifyRes = verifyAtomAddress(params)
        let verifyRes = verifyAddress(params)
        console.log(verifyRes);
    });



test('sign atom transaction', async () => {
    const params = {
        privateKey: "",
        chainId: 1,
        from: "",
        to: "",
        memo: "11211",
        amount: 0.0001,
        fee: 1,
        account_number: 2940891,
        sequence: 0,
        decimal: 6
    }
    let signTx = await signAtomTransaction(params)
    console.log(signTx);
});

test('sign version 2 atom transaction', async () => {
    const params = {
        privateKey: "",
        chainId: "cosmoshub-4",
        from: "",
        to: "",
        memo: "101111",
        amount_in: "0.001",
        fee: "0.01",
        gas: "117674",
        accountNumber: 2940894,
        sequence: 2,
        decimal: 6
    }
    let signTx = await SignV2Transaction(params)
    console.log(signTx);
});
});

