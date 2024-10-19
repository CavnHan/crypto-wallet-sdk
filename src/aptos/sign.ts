import {AptosClient, BCS, TxnBuilderTypes, AptosAccount,} from "aptos";

const axios = require('axios');

const BigNumber = require("bignumber.js");


export async function signTransaction(params: any) {
    const {
        from,
        amount,
        to,
        decimal,
        sequenceNumber,
        gasLimit,
        gasUnitPrice,
        expireTimestamp,
        chainId,
        privateKey
    } = params;

    if (!privateKey) throw new Error("privateKey 为空")

    const calcAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString();
    if (calcAmount.indexOf('.') !== -1) throw new Error("decimal 无效");

    // https://aptos.dev/guides/system-integrators-guide#accounts-on-aptos
    const entryFunctionPayload = new TxnBuilderTypes.TransactionPayloadEntryFunction(
        TxnBuilderTypes.EntryFunction.natural(
            // Fully qualified module name, `AccountAddress::ModuleName`
            `0x1::aptos_account`,
            // Module function
            "transfer",
            // The coin type to transfer
            [],
            // Arguments for function `transfer`: receiver account address and amount to transfer
            [BCS.bcsToBytes(TxnBuilderTypes.AccountAddress.fromHex(to)), BCS.bcsSerializeUint64(calcAmount)],
        ),
    );

    const rawTxn = new TxnBuilderTypes.RawTransaction(
        // Transaction sender account address
        TxnBuilderTypes.AccountAddress.fromHex(from),
        BigInt(sequenceNumber),
        entryFunctionPayload,
        // Max gas unit to spend
        BigInt(gasLimit),
        // Gas price per unit
        BigInt(gasUnitPrice),
        // Expiration timestamp.
        BigInt(expireTimestamp),
        new TxnBuilderTypes.ChainId(chainId),
    );

    const fromAccount = new AptosAccount(Buffer.from(privateKey, 'hex'), from)
    const bcsTxn = AptosClient.generateBCSTransaction(fromAccount, rawTxn)
    const bcsTxnHex = Buffer.from(bcsTxn).toString('hex')
    return {
        bcsTxnHex: bcsTxnHex,
        bcsTxn: bcsTxn
    }


}

/**
 * 直接发送bcs编码的二进制数据交易
 * Content-Type: application/x.aptos.signed_transaction+bcs
 * @param bcsTxn
 */
export async function submitTransaction(bcsTxn: Uint8Array) {
    try {
        const response = await axios.post(
            'https://api.testnet.aptoslabs.com/v1/transactions',
            bcsTxn,
            {
                headers: {
                    'Content-Type': 'application/x.aptos.signed_transaction+bcs',
                },
            }
        );
        console.log('Transaction submitted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error submitting transaction:', error);
        throw error;
    }
}