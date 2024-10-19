import {AptosClient, BCS, TxnBuilderTypes, AptosAccount, HexString,} from "aptos";
import * as SHA3 from "js-sha3";

const {derivePath, getPublicKey} = require('ed25519-hd-key');

const networks = [
    "main_net",
    "test_net",
    "prv_net"
];

export function createHdAddress(seedHex: any, addressIndex: any) {
    const {key} = derivePath("m/44'/637'/0'/0'/" + addressIndex + "'", seedHex);
    const publicKey = getPublicKey(new Uint8Array(key), false).toString('hex')
    const pubKey = {pubKey: publicKey}
    return {
        privateKey: key.toString('hex') + pubKey,
        'publicKey': publicKey,
        'address': pubKeyToAddress(pubKey)
    }
}

export function pubKeyToAddress({pubKey}: { pubKey: string }): string {
    if (pubKey?.length !== 64) throw Error("Wrong Public Key");
    const hash = SHA3.sha3_256.create();
    hash.update(Buffer.from(pubKey, "hex"));
    hash.update("\x00");
    return new HexString(hash.hex()).hex();
}

export function verifyAddress({address, network}: { address: string, network: string }): boolean {
    try {
        // regex
        const regex = new RegExp("^0x[0-9a-fA-F]{64}$");
        if (!regex.test(address)) return false;
        if (!networks.includes(network)) return false;
    } catch (error) {
        return false;
    }
    return true;
}