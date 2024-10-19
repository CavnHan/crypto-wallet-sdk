const {derivePath, getPublicKey} = require('ed25519-hd-key');

export function createKdaAddress(seedHex: string, addressIndex: string) {
    const {key} = derivePath("m/44'/626'/0'/" + addressIndex + "'", seedHex);
    const publicKey = getPublicKey(new Uint8Array(key), false).toString('hex');
    const hdWallet = {
        privateKey: key.toString('hex') + publicKey,
        publicKey,
        address: "k:" + publicKey
    };
    return JSON.stringify(hdWallet);
}

export function pubKeyToAddress(params: any): string {
    const {pubKey} = params;
    return "k:" + pubKey
}

export function verifyAddress(params: any) {
    let {address} = params;
    const regexp = /^k:[0-9a-fA-F]{64}$/;
    if (address.length !== 66) {
        return false
    }
    return regexp.test(address);
}
