const { bech32 } = require('bech32');

const ALLOWED_CHARS = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

var regexp = new RegExp('^(cosmos)1([' + ALLOWED_CHARS + ']+)$') // cosmos + bech32 separated by '1'

export function isValidAddress(address: string) {
    return regexp.exec(address) !== null;
}

export function verifyChecksum(address: any) {
    const decoded = bech32.decode(address);
    return decoded && decoded.words.length === 32;
}

