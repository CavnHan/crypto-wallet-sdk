import * as bip39 from 'bip39';
import {CreateSchnorrAddressParams, createSchnorrAddressTapRoot} from "@/bitcoin"

describe('Bitcoin Taproot test', () => {
    it('create address', async () => {
        const mnemonic = "your mnemonic";
        const params_1 = {
            mnemonic: mnemonic,
            password: ""
        };
        const seedHex = bip39.mnemonicToSeedSync(mnemonic);
        const params:CreateSchnorrAddressParams = {
            seedHex: seedHex.toString('hex'),
            receiveOrChange: '0',
            addressIndex: 0,
            network: "mainnet"
        }
        const account = await createSchnorrAddressTapRoot(params)
        console.log(account)
    });
});