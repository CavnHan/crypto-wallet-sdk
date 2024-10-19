import {
    createMnemonic,
    mnemonicToEntropy,
    entropyToMnemonic,
    mnemonicToSeed,
    mnemonicToSeedSync,
    validateMnemonic
} from "@/bitcoin";

const crypto_ts = require('crypto');
const bip39 = require('bip39');

describe('bip39 test case', () => {
    let memonic: string; // 助记词
    let memonicByImpl: string//手动实现助记词生成

    beforeAll(() => {
        memonic = createMnemonic(12, "chinese_simplified");
        console.log('助记词:\n', memonic);
    });

    test('createMnemonic', () => {
        expect(typeof memonic).toBe('string');
    });

    test('mnemonicToEntropy', () => {
        const entropy = mnemonicToEntropy(memonic, "chinese_simplified");
        console.log(`助记词:(${memonic})转换为熵:\n${entropy}`);
    })

    test('entropyToMnemonic', () => {
        const encrytMnemonic = ''
        const entropy = entropyToMnemonic(encrytMnemonic, "chinese_simplified");
        console.log(`熵:(${encrytMnemonic})转换为助记词:\n${entropy}`);
    })

    test('mnemonicToSeed', () => {
        //同步
        const seed = mnemonicToSeedSync(memonic, 'asdfg123');
        console.log('助记词转换为种子：', seed)
        //异步
        const seed2 = mnemonicToSeed(memonic, 'asdfg123');
        seed2.then((res: any) => {
            console.log('助记词转换为种子：', res)
        })
    })
    test('validateMnemonic', () => {
        const result = validateMnemonic(memonic, "chinese_simplified");
        console.log('验证助记词是否合规：', result)
    })

    test('createMnemonicByImpl', () => {
        //1.生成对应位数的熵，比如：128位 160位 192位 224位 256位
        //128位 16字节的十六进制数
        const entropy_128 = crypto_ts.randomBytes(16).toString('hex');
        //160位 20字节的十六进制数
        const entropy_160 = crypto_ts.randomBytes(20).toString('hex');
        //192位 24字节的十六进制数
        const entropy_192 = crypto_ts.randomBytes(24).toString('hex');
        //224位 28字节的十六进制数
        const entropy_224 = crypto_ts.randomBytes(28).toString('hex');
        //256位 32字节的十六进制数
        const entropy_256 = crypto_ts.randomBytes(32).toString('hex');

        //2.计算校验和（SHA-256）
        const entropyBits = 128;
        const hash_128 = crypto_ts.createHash('sha256').update(Buffer.from(entropy_128, 'hex')).digest();        //提取前4位   128 / 32 = 4
        const checksumBits = entropyBits / 32
        const checksum_128 = hash_128[0] >> (8 - checksumBits);

        //3.组合熵和校验和
        const entropyBinary = Buffer.from(entropy_128, 'hex').toString('binary').split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
        const combined = entropyBinary + checksum_128.toString(2).padStart(checksumBits, '0');

        // 4. 分割位为助记词索引
        const mnemonicIndices = combined.match(/.{11}/g)?.map(binary => parseInt(binary, 2)) ?? [];
        // 5. 映射为助记词
        const wordlist = bip39.wordlists.EN; //  使用 bip39 的词表
        const mnemonic = mnemonicIndices.map(index => wordlist[index]).join(' ');

        console.log("Mnemonic:", mnemonic);

        // 验证助记词 (使用 bip39 库)
        const isValid = bip39.validateMnemonic(mnemonic);
        expect(isValid).toBe(true);
    })

});