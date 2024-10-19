import {Ed25519Keypair,fromB64} from '@mysten/sui.js';


export function createSuiAddress(seedHex: string, receiveOrChange: string, addressIndex: string, network: string) {
    const keyPair = Ed25519Keypair.deriveKeypairFromSeed(seedHex, `m/44'/784'/0'/0'/${addressIndex}'`);
    return {
        privateKey: Buffer.from(fromB64(keyPair.export().privateKey)).toString('hex'),
        publicKey: Buffer.from(keyPair.getPublicKey().toBytes()).toString('hex'),
        address: keyPair.getPublicKey().toSuiAddress()
    }
}

export function verifySuiAddress(params: any) {
    const {address, network,} = params;
    const regex = new RegExp('^0x[0-9a-fA-F]{64}$');
    if (!regex.test(address)) return false;
    return true;
}

export function importSuiAddress(params: any) {
    const {privateKey, network} = params;
    const keyPair = Ed25519Keypair.fromSecretKey(Uint8Array.from(Buffer.from(privateKey, 'hex')))
    return keyPair.getPublicKey().toSuiAddress()

}

