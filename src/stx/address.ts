import {
    makeSTXTokenTransfer,
    AnchorMode,
    validateStacksAddress,
    TransactionVersion,
    getAddressFromPrivateKey
} from '@stacks/transactions';
import {StacksMainnet, StacksTestnet} from '@stacks/network';

const BigNumber = require('bignumber.js');
const secp256k1 = require('secp256k1');
const ecc = require('tiny-secp256k1');
const {BIP32Factory} = require('bip32');
const bip32 = BIP32Factory(ecc);

/**
 * 根据公钥推导地址
 */
export function createAddress(parms: any) {
    const {seedHex, addressIndex} = parms
    const node = bip32.fromSeed(Buffer.from(seedHex, 'hex'))
    //推导子密钥
    const childKey = node.derivePath("m/44'/5757'/0'/0/" + addressIndex + '');

    const derivePubKey = childKey.publicKey.toString('hex')
    const publickye = Buffer.from(derivePubKey, 'hex')

    //将压缩公钥转成未压缩公钥
    let uncompressedPublicKey = new Uint8Array(65)
    secp256k1.publicKeyConvert(new Uint8Array(publickye), false, uncompressedPublicKey)

    //ts-ignore
    //生成地址
    const address = getAddressFromPrivateKey(Buffer.from(childKey.privateKey).toString('hex') + "01", TransactionVersion.Mainnet)

    return {
        privatekey: Buffer.from(childKey.privateKey).toString('hex') + "01",
        address: address
    }
}

export function verifyAddress(params: any) {
    let {network, address} = params;
    const regMainNet = /^SP[0-9A-Za-z]{38,39}$/g;
    const regTestNet = /^ST[0-9A-Za-z]{38,39}$/g;
    if (network === "main_net" && !regMainNet.test(address)) {
        return false
    }
    if (network === "test_net" && !regTestNet.test(address)) {
        return false
    }
    return validateStacksAddress(address)

}