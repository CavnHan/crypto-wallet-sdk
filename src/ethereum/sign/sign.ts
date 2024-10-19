// @ts-ignore
import {Interface} from '@ethersproject/abi';
import {FeeMarketEIP1559Transaction, Transaction} from '@ethereumjs/tx'
import Common from '@ethereumjs/common'
import {numberToHex} from "@/ethereum";

const ethers = require('ethers');
const BigNumber = require('BigNumber.js');

export interface EthSignParams {
    privateKey?: string;
    nonce?: number;
    from?: string;
    to?: string;
    gasPrice?: number;
    gasLimit?: number;
    amount?: string;
    tokenAddress?: string;
    decimal?: number;
    maxPriorityFeePerGas?: number;
    maxFeePerGas?: number;
    chainId?: number;
    data?: string;
}


export function ethSign(params: EthSignParams) {
    const transactionNonce = numberToHex(params.nonce);
    const gasLimits = numberToHex(params.gasLimit);
    const chainIdHex = numberToHex(params.chainId);
    // 将 `params.amount` 转换为 `BigNumber` 对象，并将其乘以 10 的 `params.decimal` 次方。
    // 这将金额转换为最小单位（如 wei），以便在以太坊交易中使用。
    let newAmount = BigNumber(params.amount).times((BigNumber(10).pow(params.decimal)));
    const numBalanceHex = numberToHex(newAmount);
    let txData: any = {
        nonce: transactionNonce,
        gasLimit: gasLimits,
        to: params.to,
        from: params.from,
        chainId: chainIdHex,
        value: numBalanceHex
    }
    //判断交易类型
    if (params.maxFeePerGas && params.maxPriorityFeePerGas) {
        //EIIP-1559
        txData.maxFeePerGas = numberToHex(params.maxFeePerGas);
        txData.maxPriorityFeePerGas = numberToHex(params.maxPriorityFeePerGas);
    } else {
        //Legacy
        txData.gasPrice = numberToHex(params.gasPrice);
    }

    //判断是否为代币交易
    if (params.tokenAddress && params.tokenAddress !== "0x00") {
        const ABI = [
            "function transfer(address to, uint amount)"
        ];
        //创建一个新的 Interface 实例，用于与代币合约交互。
        const iface = new Interface(ABI);
        //编码代币合约的 transfer 函数调用。
        txData.data = iface.encodeFunctionData("transfer", [params.to, numBalanceHex])
        txData.to = params.tokenAddress
        //设置交易金额为 0。
        txData.value = 0
    } else if (params.data) {
        //设置交易数据。
        txData.data = params.data
    } else {
        //普通交易，不做处理
    }


    // 定义两个变量 `common` 和 `tx`，分别用于存储网络配置和交易对象。
    let common: any, tx: any;

    // 检查 `txData` 是否包含 `maxFeePerGas` 和 `maxPriorityFeePerGas`，以确定交易类型。
    if (txData.maxFeePerGas && txData.maxPriorityFeePerGas) {
        // 如果是 EIP-1559 交易，使用 `Common.custom` 方法创建一个自定义的网络配置对象，包含 `chainId` 和 `defaultHardfork`。
        common = (Common as any).custom({
            chainId: params.chainId,
            defaultHardfork: "london"
        });
        // 使用 `FeeMarketEIP1559Transaction` 类创建交易对象，并传入 `txData` 和 `common` 配置。
        tx = FeeMarketEIP1559Transaction.fromTxData(txData, {
            common
        });
    } else {
        // 如果是传统交易，使用 `Common.custom` 方法创建一个自定义的网络配置对象，只包含 `chainId`。
        common = (Common as any).custom({
            chainId: params.chainId
        });
        // 使用 `Transaction` 类创建交易对象，并传入 `txData` 和 `common` 配置。
        tx = Transaction.fromTxData(txData, {
            common
        });
    }
    //创建一个新的 Buffer 对象，用于存储私钥的字节表示。
    // 将私钥从十六进制字符串转换为 Buffer 对象，以便用于签名交易。
    if (!params.privateKey) {
        throw new Error("Private key is required");
    }
    const privateKeyBuffer = Buffer.from(params.privateKey, "hex")

    // 使用私钥对交易对象进行签名，生成签名后的交易对象。
    const signedTx = tx.sign(privateKeyBuffer)

    // 将签名后的交易对象序列化为 Buffer 对象，以便可以将其发送到以太坊网络。
    const serializedTx = signedTx.serialize()

    // 检查序列化后的交易对象是否为空或未定义，如果是，则抛出错误。
    if (!serializedTx) {
        throw new Error("sign is null or undefined")
    }

    // 将序列化后的交易对象转换为十六进制字符串，并添加 `0x` 前缀，然后返回该字符串。
    return `0x${serializedTx.toString('hex')}`


}

export interface SignOpMainnetTransactionParams {
    privateKey: string;
    nonce?: number;
    from?: string;
    to?: string;
    gasLimit?: number;
    gasPrice?: number;
    amount?: string;
    data?: string;
    chainId?: number;
    decimal?: number;
    maxFeePerGas?: number;
    maxPriorityFeePerGas?: number;
    tokenAddress?: string;
    tokenId: string;
}

export function signOpMainnetTransaction(params: SignOpMainnetTransactionParams): Promise<string> {
    let wallet = new ethers.Wallet(Buffer.from(params.privateKey, 'hex'));
    const txData: any = {
        nonce: ethers.utils.hexlify(params.nonce),//转成成十六进制
        from: params.from,
        to: params.to,
        gasLimit: ethers.utils.hexlify(params.gasLimit),
        //转换为最小单位后转成十六进制
        value: ethers.utils.hexlify(ethers.utils.parseUnits(params.amount, params.decimal)),
        chainId: params.chainId
    }
    if (params.maxFeePerGas && params.maxPriorityFeePerGas) {
        //EIIP-1559
        txData.maxFeePerGas = numberToHex(params.maxFeePerGas)
        txData.maxPriorityFeePerGas = numberToHex(params.maxPriorityFeePerGas)
    } else {
        //Legacy
        txData.gasPrice = ethers.utils.hexlify(params.gasPrice)
    }
    if (params.tokenAddress && params.tokenAddress !== '0x00') {
        //token交易
        let idata: any
        if (params.tokenId === "0x00") {
            //ERC20转账
            const ABI = [
                'function transfer(address to, uint amount)'
            ]
            const iface = new Interface(ABI)
            idata = iface.encodeFunctionData('transfer', [params.to, ethers.utils.hexlify(ethers.utils.parseUnits(params.amount, params.decimal))])
        } else {
            //ERC721转账或兼容代币
            const ABI = [
                "function safeTransferFrom(address from, address to, uint256 tokenId)"
            ]
            const iface = new Interface(ABI)
            idata = iface.encodeFunctionData('safeTransferFrom', [wallet.address, params.to, params.tokenId])
        }
        txData.data = idata
        txData.to = params.tokenAddress
        txData.value = 0
    }
    if (params.data) {
        txData.data = params.data
    }
    return wallet.signTransaction(txData)
}
