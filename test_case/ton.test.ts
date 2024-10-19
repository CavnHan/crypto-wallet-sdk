import {createTonAddress, createNewTonAddress, convertEqToUq} from '@/ton/address'

const bip39 = require('bip39');
import {SignTransaction} from '@/ton/sign'

describe('create wallet', () => {
    test('create address with testnet', async () => {
        const mnemonic = ""
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const addressInfo = createTonAddress(seed,0, 0, true)
        console.log("addressInfo===", addressInfo)
    });
    test('create address with main', async () => {
        const mnemonic = ""
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const addressInfo = createTonAddress(seed, 0,0, false)
        console.log("addressInfo===", addressInfo)
    });

    test('create new  address', async () => {
        const mnemonic = ""
        // const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        // const addressInfo = createTonAddress(seed, 0)
        // console.log("addressInfo===", addressInfo)
        //主网
        const mainAddress_account0 = await createNewTonAddress(mnemonic, 0, 0, false)
        console.log('mainAddress_account0==\n', mainAddress_account0)
        //测试网
        const testAddress_account0 = await createNewTonAddress(mnemonic, 0, 0, true)
        console.log('testAddress_account0==\n', testAddress_account0)
        //主网
        const mainAddress_account1 = await createNewTonAddress(mnemonic, 1, 1, false)
        console.log('mainAddress_account0==\n', mainAddress_account1)
        //测试网
        const testAddress_account1 = await createNewTonAddress(mnemonic, 1, 0, true)
        console.log('testAddress_account0==\n', testAddress_account1)

    });

    test('sign  transaction with testnet', async () => {
        const param = {
            from: "",
            to: "",
            memo: "memo",
            amount: 0.1,
            sequence: 23962140,
            decimal: 10,
            privateKey: "",
            istestnet: true
        }
        const sign_message = await SignTransaction(param)
        console.log("sign_message===\n", sign_message)
    })
});
