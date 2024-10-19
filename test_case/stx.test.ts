
const bip39 = require('bip39');
import {createAddress} from "@/stx/address";
import {signTransaction} from '@/stx/sign'

describe('stx wallet test', ()=> {
    test('create stx Address ', async () => {
        const mnemonic = "";
        const seed = bip39.mnemonicToSeedSync(mnemonic, )
        const params = {
            seedHex: seed,
            addressIndex: 0,
        }
        const account = createAddress(params)
        console.log(account)
    });

    test('sign tranction', async () => {
        const params = {
            to: "",
            amount: 0.01,
            fee: 21700,
            nonce: 0,
            memo: "cavn",
            decimal: 6,
            privatekey: "",
            network: "main_net"
        }
        const account = await signTransaction(params)
        console.log(account)
    })
});

