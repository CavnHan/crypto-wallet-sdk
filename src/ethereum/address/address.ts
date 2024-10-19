//@ts-ignore
import {Interface} from '@ethersproject/abi'; // 用于与以太坊智能合约的 ABI（应用程序二进制接口）交互。允许解码交易数据和编码函数调用。

// 用于创建和处理以太坊交易，包括 EIP-1559 类型的交易。
// FeeMarketEIP1559Transaction:  专门用于 EIP-1559 交易，该交易类型引入了新的 gas 费用机制（基本费用和优先费用）。
// Transaction: 用于处理旧版交易类型。
import {FeeMarketEIP1559Transaction, Transaction} from '@ethereumjs/tx';

// 用于配置与不同以太坊网络（主网、测试网等）的连接。提供网络参数，例如 chainId，hardfork 规则等。
import Common from '@ethereumjs/common';


// ethers.js 是一个用于与以太坊区块链交互的综合性库。它提供各种功能，例如钱包管理、交易签名和智能合约交互。
const ethers = require('ethers');

// BigNumber.js 是一个用于处理任意精度十进制和非十进制算术运算的库。
// 在以太坊开发中，它对于处理大数至关重要，因为 JavaScript 的原生数字类型无法准确表示 Wei 等单位。
const BigNumber = require('BigNumber.js');

export function numberToHex(value: any) {
    const number = BigNumber(value)
    const result = number.toString(16)
    return '0x' + result;
}

export function createEthAddress(seedHex: string, addressIndex: string) {
    //生成一个 HDNode 对象，用于从种子生成钱包地址。
    const hdNode = ethers.utils.HDNode.fromSeed(Buffer.from(seedHex, 'hex'))
    const {
        privateKey,
        publicKey,
        address
    } = hdNode.derivePath("m/44'/60'/0'/0/" + addressIndex + '')
    return JSON.stringify({
        privateKey,
        publicKey,
        address
    })


}

export function ImportPrivateKeyToAddress(privateKey: string) {
    //判断私钥是否合法或者带有前缀0x，有则去掉前缀
    if (privateKey.length !== 64 && privateKey.length !== 66) {
        throw new Error('Invalid private key');
    }
    if (privateKey.length === 66) {
        privateKey = privateKey.slice(2);
    }
    const wallet = new ethers.Wallet(Buffer.from(privateKey, 'hex'));
    return JSON.stringify({
        privateKey,
        address: wallet.address
    })
}

export function ImportPublickeyToAddress(publicKey: string): string {
    // if (publicKey.startsWith('04') && publicKey.length === 128) {
    //     // 未压缩公钥 -  添加 0x 前缀，因为 ethers.utils.computeAddress 需要它用于未压缩公钥
    //     return ethers.utils.computeAddress("0x" + publicKey);
    // } else if ((publicKey.startsWith('02') || publicKey.startsWith('03')) && publicKey.length === 66) {
    //     // 压缩公钥 - ethers.utils.computeAddress 已经可以正确处理压缩公钥
    //     return ethers.utils.computeAddress(publicKey);
    // } else {
    //     throw new Error("Invalid public key format");
    // }
    return ethers.utils.computeAddress(publicKey)
}

