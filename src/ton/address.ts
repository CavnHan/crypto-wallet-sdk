const {derivePath, getPublicKey} = require('ed25519-hd-key');
const TonWeb = require('tonweb-lite');
import {Address} from 'ton';
import {mnemonicToWalletKey} from 'ton-crypto';

const base64url = require('base64url');


/**
 * 从 HD 钱包种子生成 TON 地址。
 * @param {string} seedHex HD 钱包种子（十六进制字符串格式）。
 * @param {number} addressIndex 地址索引，用于从种子派生不同的地址。
 * @param accountIndex
 * @param istestnet
 * @returns {{privateKey: string, publicKey: string, address: string}} 包含私钥、公钥和地址的对象。
 */
export function createTonAddress(seedHex: string, accountIndex: number,addressIndex:number,istestnet:boolean) {
    // 使用 BIP44 路径从种子派生私钥
    // m/44'/607'/0'/addressIndex'  -- 44' BIP44, 607' TON coin type, 1' 外部地址, addressIndex 地址索引
    const {key} = derivePath(`m/44'/607'/${accountIndex}'/${addressIndex}'`, seedHex);

    // 从私钥生成未压缩的公钥，并转换为十六进制字符串
    const publicKey = getPublicKey(new Uint8Array(key), false).toString('hex');

    // 创建 TonWeb 实例
    const tonweb = new TonWeb();

    // 获取 v4R2 钱包类
    const WalletClass = tonweb.wallet.all['v4R2'];

    // 将十六进制字符串形式的公钥转换为 Uint8Array 类型的字节数组
    const publikeyBytes = new Uint8Array(Buffer.from(publicKey, 'hex'));

    // 创建 v4R2 钱包实例，wc: 0 表示工作链 ID 为 0
    const wallet = new WalletClass(tonweb.provider, {
        publicKey: publikeyBytes,
        wc: 0,
    });

    // 获取钱包地址
    const walletAddress = wallet.getAddress();
    // const userFriendlyAddress = walletAddress.toFriendly({urlSafe: true});

    // 返回私钥、公钥和地址。
    return {
        privateKey: key.toString('hex') + publicKey, //  私钥 (十六进制) + 公钥 (十六进制).  不安全!
        publicKey: publicKey, // 公钥 (十六进制)
        //四个参数分别表示是否测试网：
        //isUserFriendly:是否用户友好地址
        //isUrlSafe:是否使用 URL 安全格式生成地址，地址进行 base64 Url 编码
        //isBounceable:是否可回退
        //isTestnet:是否测试网
        address: walletAddress.toString(true, true, true, istestnet), // TON 地址字符串
        // address: userFriendlyAddress
    };
}

export async function createNewTonAddress(mnemonic: string, addressIndex: number, workchain: number, isTestNet: boolean) {
    const derivationPath = `m/44'/607'/0'/${addressIndex}'`;
    const keypair = await mnemonicToWalletKey(mnemonic.split(' '), derivationPath);

    const address = new Address(workchain, keypair.publicKey);
    const userFriendlyAddress = address.toString({
        testOnly: isTestNet, // 设置为 true 表示测试网，false 表示主网
        bounceable: true,   // 通常情况下使用 bounceable 地址
        urlSafe: true,     // 必须设置为 true 才能生成 user-friendly 地址
    });

    return {
        privateKey: keypair.secretKey.toString('hex'),
        publicKey: keypair.publicKey.toString('hex'),
        address: userFriendlyAddress,
    };
}

export function verifyAddress(params: any) {
    const {address} = params;
    const regex = new RegExp("^[a-zA-Z0-9\+\-\_\*\/\%\=]{48}$");
    if (!regex.test(address)) return false;
    const dAddress = new TonWeb.utils.Address(address);
    const nfAddr = dAddress.toString(false);
    const fnsnbntAddr = dAddress.toString(true, false, false, false);
    const fsnbntAddr = dAddress.toString(true, true, false, false);
    const fnsnbtAddr = dAddress.toString(true, false, false, true);
    const fsnbtAddr = dAddress.toString(true, true, false, true);
    const fnsbntAddr = dAddress.toString(true, false, true, false);
    const fsbntAddr = dAddress.toString(true, true, true, false);
    const fnsbtAddr = dAddress.toString(true, false, true, true);
    const fsbtAddr = dAddress.toString(true, true, true, true);
    return address === nfAddr || address === fnsnbntAddr
        || address === fsnbntAddr || address === fnsnbtAddr
        || address === fsnbtAddr || address === fnsbntAddr || address === fsbntAddr
        || address === fnsbtAddr || address === fsbtAddr;
}


export function importTonAddress(privateKey: string) {
    const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSecretKey(new Uint8Array(Buffer.from(privateKey, 'hex')));

    const tonweb = new TonWeb();

    const WalletClass = tonweb.wallet.all['v4R2'];

    const wallet = new WalletClass(tonweb.provider, {
        publicKey: keyPair.publicKey,
        wc: 0
    });

    const walletAddress = wallet.getAddress();
    return {
        "privateKey": privateKey,
        "publicKey": Buffer.from(keyPair.publicKey).toString("hex"),
        "address": walletAddress.toString(true, true, true, false)
    }
}

export function convertEqToUq(eqAddress: string) {
    if (eqAddress.startsWith('EQ')) {
        // 去掉 'EQ' 前缀
        const base64String = eqAddress.slice(2);
        // 进行 base64url 解码
        const decodedBytes = base64url.toBuffer(base64String);
        // 替换标志位：直接将 'EQ' 替换为 'UQ'
        const uqBase64String = base64url.encode(decodedBytes);
        return 'UQ' + uqBase64String;
    } else {
        throw new Error("Invalid eq address");
    }
}




