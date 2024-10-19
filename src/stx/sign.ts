import {
    makeSTXTokenTransfer,
    AnchorMode,
} from '@stacks/transactions';
import {StacksMainnet, StacksTestnet} from '@stacks/network';
const BigNumber = require('bignumber.js');

export async function signTransaction(params: any) {
    const {
        to, amount, fee, nonce, memo, decimal, privatekey, network
    } = params
    const calceAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toNumber()
    if (calceAmount % 1 != 0) throw new Error("decimal 无效")
    const stacksNet = network === "main_net" ? new StacksMainnet() : new StacksTestnet()
    const txOptions = {
        recipient: to,
        amount: calceAmount,
        senderKey: privatekey,
        network: stacksNet,
        memo: memo,
        nonce: nonce,
        fee: fee,
        //交易锚定模式
        anchorMode: AnchorMode.Any
    }
    const transaction = await makeSTXTokenTransfer(txOptions);
    let uint8Array = transaction.serialize();
    //返回十六进制字符串
    return Buffer.from(uint8Array).toString('hex')
}