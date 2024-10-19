import BIP32Factory from 'bip32';
import * as ecc from 'tiny-secp256k1';
import * as bitcoin from 'bitcoinjs-lib';

import {toXOnly, tapTreeToList, tapTreeFromList} from "bitcoinjs-lib/src/psbt/bip371"

bitcoin.initEccLib(ecc);
const bip32 = BIP32Factory(ecc);

export interface CreateSchnorrAddressParams {
    seedHex: string;
    receiveOrChange: '0' | '1';
    addressIndex: number;
    network: string;
}


export async function createSchnorrAddressTapRoot(params: CreateSchnorrAddressParams) {
    const {seedHex, receiveOrChange, addressIndex, network} = params;
    const root = bip32.fromSeed(Buffer.from(seedHex, 'hex'), bitcoin.networks.bitcoin);
    let path = "m/86'/0'/0'/0/" + addressIndex + '';
    if (receiveOrChange === '1') {
        path = "m/86'/0'/0'/1/" + addressIndex + '';
    }

    const childKey = root.derivePath(path);
    const privateKey = childKey.privateKey;
    if (!privateKey) throw new Error('No private key found');

    const publicKey = childKey.publicKey;

    // 计算 taproot 公钥
    const tweak = bitcoin.crypto.taggedHash('TapTweak', publicKey.slice(1, 33));
    const tweakedPublicKey = Buffer.from(publicKey);
    for (let i = 0; i < 32; ++i) {
        tweakedPublicKey[1 + i] ^= tweak[i];
    }

    // 生成 P2TR 地址
    const {address} = bitcoin.payments.p2tr({
        internalPubkey: tweakedPublicKey.slice(1, 33)
    });

    return {
        privateKey: childKey.privateKey?.toString('hex') ?? '', // or any default value you prefer
        publicKey: Buffer.from(childKey.publicKey).toString('hex'),
        address
    };
}