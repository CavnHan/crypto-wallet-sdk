const TonWeb = require('tonweb-lite');
const BigNumber = require('bignumber.js');
import {Address, Cell, contractAddress} from 'ton-core';
import {mnemonicToWalletKey, sign} from 'ton-crypto';


/**
 * 签名 TON 交易.
 * 使用 v4R2 钱包合约.
 * @param {object} params 交易参数.
 * @param {string} params.from 发送方地址.
 * @param {string} params.to 接收方地址.
 * @param {string} params.memo 交易备注 (可选).
 * @param {string} params.amount 转账金额 (十进制字符串).
 * @param {number} params.sequence 交易序列号.
 * @param {number} params.decimal 代币小数位数.
 * @param {string} params.privateKey 发送方私钥 (十六进制字符串).
 * @returns {Promise<{hash: string, rawtx: string}>} 包含交易哈希和原始交易数据 (BOC) 的 Promise.
 * @throws {Error} 如果输入参数无效或交易失败.
 */
export async function SignTransaction(params: {
    from: any;
    to: any;
    memo: any;
    amount: any;
    sequence: any;
    decimal: any;
    privateKey: any;
    istestnet: boolean;
}): Promise<{ hash: string; rawtx: string }> {
    const {from, to, memo, amount, sequence, decimal, privateKey, istestnet} = params;

    // 创建 TonWeb 实例
    const tonweb = new TonWeb();

    // 使用 BigNumber 计算实际转账金额 (纳米 TON)
    const calcAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toNumber();
    if (calcAmount % 1 !== 0) throw new Error('amount invalid');

    // 从私钥生成密钥对
    const keyPair = TonWeb.utils.nacl.sign.keyPair.fromSecretKey(new Uint8Array(Buffer.from(privateKey, 'hex')));

    // 使用 v4R2 钱包合约
    const WalletClass = tonweb.wallet.all['v4R2'];

    // 创建钱包实例
    const wallet = new WalletClass(tonweb.provider, {
        publicKey: keyPair.publicKey,
        wc: 0, // workchain 0
    });

    // 获取私钥
    const secretKey = keyPair.secretKey;

    // 获取钱包地址
    const walletAddress = await wallet.getAddress();

    // 将钱包地址转换为用户友好的 base32 格式
    const fromAddress = walletAddress.toString(true, true, true, istestnet);

    // 验证 from 地址是否与从私钥生成的地址匹配
    if (from !== fromAddress) throw new Error('from address invalid');

    // 创建目标地址对象
    const toAddress = new TonWeb.utils.Address(to);

    // 构建并发送交易
    const tx_ret = await wallet.methods.transfer({
        secretKey,
        toAddress: toAddress.toString(true, true, true, istestnet), // 使用用户友好的地址格式
        amount: calcAmount,
        seqno: sequence,
        payload: memo || '',
        sendMode: 3, // 3:  默认转账模式
    });

    // 获取交易查询对象
    const queryData = await tx_ret.getQuery();

    // 获取交易哈希
    const hash = await queryData.hash();

    // 获取交易的 BOC 数据
    const boc = await queryData.toBoc(false);

    // 返回交易哈希和 BOC (Base64 编码)
    return {
        hash: TonWeb.utils.bytesToBase64(hash),
        rawtx: TonWeb.utils.bytesToBase64(boc),
    };
}
