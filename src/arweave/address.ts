import Arweave from 'arweave';
import NodeCryptoDriver from 'arweave/node/lib/crypto/node-driver';
//init crypto driver
Arweave.crypto = new NodeCryptoDriver();
//init instance
// const arweave = Arweave.init({
//     // You can test with a local node instead, using ArLocal
//     host: '127.0.0.1',
//     port: 1984,
//     protocol: 'http'
// });
const arweave = Arweave.init({
    host: 'arweave.net', port: 443,
    protocol: 'https',
    timeout: 10000
});


/**
 * create arweave wallet
 */
export async function createArWeaveWallet(): Promise<any> {
    const jwk = await Arweave.crypto.generateJWK();
    const address = await arweave.wallets.jwkToAddress(jwk);
    return {
        address: address,
        publickey: jwk.n,
        privatekey: JSON.stringify(jwk)
    }
}

/**
 * public key import address
 * @param publicKey
 */
export async function importPublicKey(publicKey: string): Promise<string> {
    const address = await arweave.wallets.ownerToAddress(publicKey);
    return address
}

/**
 * private key import address
 * @param privateKey
 */
export async function importPrivateKey(data: any): Promise<string> {
    const address = await arweave.wallets.jwkToAddress(data);
    return address
}

/**
 * verify address format
 * @param address
 */
export async function verifyAddress(address: string): Promise<boolean> {
    const addressRegex = /^[a-zA-Z0-9_-]{43}$/;
    return addressRegex.test(address);
}

