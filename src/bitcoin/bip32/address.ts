// 导入 bitcoinjs-lib 库，这是一个用于处理比特币的 JavaScript 库。
// 它提供了构建和签名交易、生成地址、处理脚本等功能。
// 将所有导出内容导入到名为 bitcoin 的命名空间下。
import * as bitcoin from 'bitcoinjs-lib';
import exp from "node:constants";

// 导入 tiny-secp256k1 库，这是一个高性能的 secp256k1 椭圆曲线加密库。
// secp256k1 是比特币使用的椭圆曲线，用于生成密钥和签名。
// tiny-secp256k1 提供了快速且高效的椭圆曲线运算。
const ecc = require('tiny-secp256k1');

// 从 bip32 库导入 BIP32Factory 函数。
// BIP32 定义了分层确定性钱包 (HD Wallets) 的标准。
// HD 钱包允许从单个种子派生出无数的密钥对，简化了钱包备份和密钥管理。
// BIP32Factory 用于创建 BIP32 钱包实例。
const {BIP32Factory} = require('bip32');

// 创建一个 bip32 实例，使用 tiny-secp256k1 提供的椭圆曲线算法进行密钥派生。
// 这将使用 secp256k1 椭圆曲线算法来执行 HD 钱包的所有操作，例如从种子生成主密钥和派生子密钥。
const bip32 = BIP32Factory(ecc);

// 定义参数接口，用于指定创建地址所需的参数
export interface CreateAddressParams {
    seedHex: string; // 种子的十六进制表示
    receiveOrChange: '0' | '1'; // 接收地址或找零地址，'0' 表示接收，'1' 表示找零
    addressIndex: number; // 地址索引，用于生成不同地址
    network: keyof typeof bitcoin.networks; // 网络类型，例如 'bitcoin' 或 'testnet'
    method: 'p2pkh' | 'p2wpkh' | 'p2sh'; // 地址类型，例如 'p2pkh'、'p2wpkh' 或 'p2sh'
}

// 定义返回结果接口，用于指定函数返回的数据结构
export interface AddressResult {
    privateKey: string; // 生成的私钥的十六进制表示
    publicKey: string; // 生成的公钥的十六进制表示
    address: string | undefined; // 生成的地址字符串，如果生成失败则为 undefined
}

// 定义创建多签地址所需的参数接口
export interface CreateMultiSigAddressParams {
    pubkeys: Buffer[]; // 参与多签的公钥数组，每个公钥都是一个 Buffer 对象
    network: keyof typeof bitcoin.networks; // 比特币网络类型，例如 'bitcoin' 或 'testnet'
    method: 'p2pkh' | 'p2wpkh' | 'p2sh'; // 多签地址类型：'p2pkh'、'p2wpkh' 或 'p2sh'
    threshold: number; // 签名阈值，表示需要多少个签名才能花费资金
}

/**
 * 创建比特币地址。
 * @param params 创建地址所需的参数，包括种子、地址类型、网络等。
 * @returns 包含私钥、公钥和地址的对象。
 * @throws 如果 method 不受支持，则抛出错误。
 */
export function createAddress(params: CreateAddressParams): AddressResult {
    const {seedHex, receiveOrChange, addressIndex, network, method} = params;

    // 从种子创建根密钥
    const root = bip32.fromSeed(Buffer.from(seedHex, 'hex'));

    // 根据接收/找零类型和索引生成派生路径
    const path = `m/44'/0'/0'/${receiveOrChange}/${addressIndex}`;

    // 从根密钥派生子密钥
    const child = root.derivePath(path);

    // 初始化地址变量
    let address: string | undefined;

    // 根据指定的地址类型生成地址
    switch (method) {
        case 'p2pkh':
            // 生成 P2PKH 地址
            address = bitcoin.payments.p2pkh({
                pubkey: child.publicKey,
                network: bitcoin.networks[network],
            }).address;
            break;
        case 'p2sh':
            // 生成 P2SH 地址 (嵌套 P2WPKH)
            address = bitcoin.payments.p2sh({
                redeem: bitcoin.payments.p2wpkh({
                    pubkey: child.publicKey,
                    network: bitcoin.networks[network],
                }),
            }).address;
            break;
        case 'p2wpkh':
            // 生成 P2WPKH 地址 (原生 SegWit)
            address = bitcoin.payments.p2wpkh({
                pubkey: child.publicKey,
                network: bitcoin.networks[network],
            }).address;
            break;
        default:
            // 如果 method 不受支持，抛出错误
            throw new Error(`Method '${method}' is not supported.`);
    }

    // 返回生成的私钥、公钥和地址
    return {
        privateKey: child.privateKey ? Buffer.from(child.privateKey).toString('hex') : '', // 如果私钥不存在，返回空字符串
        publicKey: Buffer.from(child.publicKey).toString('hex'),
        address,
    };
}

/**
 * 创建多签地址。
 * 该函数根据提供的参数生成不同类型的多签地址。
 *
 * @param params 创建多签地址所需的参数。
 * @returns 多签地址字符串。如果发生错误或方法不支持，则返回 "0x00"。
 */
export function createMultiSignAddress(params: CreateMultiSigAddressParams): string {
    const {pubkeys, network, method, threshold} = params;

    try {
        switch (method) {
            case 'p2pkh':
                // 创建 P2SH-P2MS (Pay-to-Script-Hash - Pay-to-Multi-Sig) 地址
                // 这是将多签名脚本哈希嵌入到 P2SH 地址中的传统方法
                return bitcoin.payments.p2sh({
                    redeem: bitcoin.payments.p2ms({
                        m: threshold, // 签名阈值
                        network: bitcoin.networks[network], // 比特币网络
                        pubkeys, // 参与多签的公钥数组
                    }),
                }).address!; // 使用非空断言，假设 address 属性始终存在

            case 'p2wpkh':
                // 创建 P2WSH-P2MS (Pay-to-Witness-Script-Hash - Pay-to-Multi-Sig) 地址
                // 这是使用 SegWit (隔离见证) 的更现代的多签地址类型
                return bitcoin.payments.p2wsh({
                    redeem: bitcoin.payments.p2ms({
                        m: threshold,
                        network: bitcoin.networks[network],
                        pubkeys,
                    }),
                }).address!;

            case 'p2sh':
                // 创建 P2SH-P2WSH-P2MS (Pay-to-Script-Hash - Pay-to-Witness-Script-Hash - Pay-to-Multi-Sig) 地址
                // 这是将 SegWit 多签名脚本哈希嵌入到 P2SH 地址中的方法
                return bitcoin.payments.p2sh({
                    redeem: bitcoin.payments.p2wsh({
                        redeem: bitcoin.payments.p2ms({
                            m: threshold,
                            network: bitcoin.networks[network],
                            pubkeys,
                        }),
                    }),
                }).address!;

            default:
                // 如果指定的 method 不受支持，抛出错误
                throw new Error(`Method '${method}' is not supported.`);
        }
    } catch (error) {
        // 捕获任何错误并打印错误消息
        console.error("Error creating multisig address:", error);
        // 返回一个默认值，表示地址创建失败
        return '0x00';
    }
}

/**
 * 生成 Schnorr地址
 * @param params
 * @seeHex 种子
 * @receiveOrChange 接收地址或找零地址，'0' 表示接收，'1' 表示找零
 * @addressIndex 地址索引，用于生成不同地址
 */
export function createSchnorrAddress(params: any): any {
    bitcoin.initEccLib(ecc)
    const {seedHex, receiveOrChange, addressIndex} = params
    //生成主密钥
    const root = bip32.fromSeed(Buffer.from(seedHex, 'hex'))
    //构建路径
    let path: string = "m/44'/0'/0'/0/" + addressIndex + ''
    if (receiveOrChange === '1') {
        path = "m/44'/0'/0'/1/" + addressIndex + ''
    }
    //派生子密钥对象，包含子私钥和子公钥
    const chileKey = root.derivePath(path)
    //检查私钥是否存在
    const privateKey = chileKey.privateKey
    if (!privateKey) throw new Error('No private key found')
    //获取公钥
    const publickey = chileKey.publicKey

    //生成P2TR地址
    const {address} = bitcoin.payments.p2tr({
        internalPubkey: publickey.length === 32 ? publickey : publickey.slice(1, 33)
    })
    return {
        privateKey: Buffer.from(chileKey.privateKey).toString('hex'),
        publickey: Buffer.from(chileKey.publicKey).toString('hex'),
        address
    }
}
