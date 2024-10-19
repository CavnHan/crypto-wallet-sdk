import {JWKInterface} from "arweave/web/lib/wallet";
import Transaction from "arweave/node/lib/transaction";
import {TransactionStatusResponse} from "arweave/node/transactions";
import {BlockData} from "arweave/node/blocks";
import {NetworkInfoInterface} from "arweave/node/network";
//init instance
import Arweave from 'arweave';
//init instance
// const arweave = Arweave.init({
//     // You can test with a local node instead, using ArLocal    //config node info
//     //config node info
//     host: '127.0.0.1',
//     port: 1984,
//     protocol: 'http'
// });

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443, protocol: 'https',
    timeout: 10000
});


interface TransactionParma {
    //transactionAnchors
    last_tx: string,
    //price
    reward: string
}

/**
 * Data transaction parameters
 * @key: Wallet private key
 * @data: Transaction data
 */
export interface DataTransactionParam extends TransactionParma {
    key: any,
    data: string,

}

/**
 * Wallet transaction parameters
 * @key: Wallet private key
 * @target: Target address
 * @quantity: Transaction amount, unit: Ar
 */
export interface WalletTransactionParam extends TransactionParma {
    key: any,
    target: string,
    quantity: string
}

/**
 * Sign transaction parameters
 * @transaction: Transaction
 * @key: Wallet private key
 */
export interface SignTransactionParam {
    transaction: Transaction,
    key: any
}

/**
 * Submit transaction upload parameters
 * @param tx : Transaction
 */
export interface SubmitTransactionUploadParam {
    tx: Transaction
}

/**
 * Submit transaction small upload parameters
 * @param tx : Transaction
 */
export interface SubmitTransactionSmallUploadParam {
    tx: Transaction
}

/**
 * Get transaction status parameters
 * @param txid : Transaction id
 */
export interface GetTransactionStatusParam {
    txid: string
}

/**
 * Get transaction data parameters
 * @param txid : Transaction id
 */
export interface GetTransactionDataParam {
    txid: string
}

/**
 * Get transaction parameters
 * @param txid : Transaction id
 */
export interface GetTransactionParam {
    txid: string
}

/**
 * Get tag with transaction parameters
 * @param txid : Transaction id
 */
export interface GetTagWithTransactionParam {
    txid: string,
}

export interface GetBlcokWithIndepHash {
    IndepHash: string
}


/**
 * Create data transaction
 * @param param : DataTransactionParam
 */
export async function createDataTransaction(param: DataTransactionParam): Promise<any> {
    // Create the transaction
    const transaction = await arweave.createTransaction({
        data: Buffer.from(param.data, 'utf8'),
        reward: param.reward,
        last_tx: param.last_tx
    }, param.key);
    //Sign the transaction
    await sign({transaction: transaction, key: param.key})
    //submit the transaction
    const result = await submitTransactionUpload({tx: transaction})
    console.log('result:', result)
    return JSON.stringify(transaction)
}

/**
 * Create wallet transaction
 * @param param : WalletTransactionParam
 */
export async function createWalletTransaction(param: WalletTransactionParam): Promise<any> {
    // Create the transaction
    const transaction = await arweave.createTransaction({
        target: param.target,
        quantity: arweave.ar.arToWinston(param.quantity),
        reward: param.reward,
        last_tx: param.last_tx
    }, param.key)
    //Sign the transaction
    await sign({transaction: transaction, key: param.key})
    //submit the transaction
    // const result = await submitTransactionSmallUpload({tx: transaction})
    // console.log('result:', result)
    return JSON.stringify(transaction)

}

/**
 * Sign transaction
 * @param param : SignTransactionParam
 */
export async function sign(param: SignTransactionParam) {
    await arweave.transactions.sign(param.transaction, param.key)
}

/**
 * Submit transaction upload
 * @param param : SubmitTransactionUploadParam
 */
export async function submitTransactionUpload(param: SubmitTransactionUploadParam) {
    try {
        let uploader = await arweave.transactions.getUploader(param.tx)
        // Loop until the upload is complete
        while (!uploader.isComplete) {
            // Upload the next chunk
            await uploader.uploadChunk();
            // Log the upload progress
            console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}\n`);
        }
        if (uploader.isComplete) {
            console.log(`Transaction ${param.tx.id} successfully uploaded.`)
        }
    } catch (uploadError) {
        console.log('uploadError:', uploadError)
    }

}

/**
 * Submit small transaction upload
 * @param param : SubmitTransactionSmallUploadParam
 */
export async function submitTransactionSmallUpload(param: SubmitTransactionSmallUploadParam): Promise<number> {
    // Post the transaction
    const response = await arweave.transactions.post(param.tx)
    return response.status
}

/**
 * Add tags to the transaction
 * @param param : Transaction
 * @param tags : Map<string, string>
 */
export async function addTagWithTransaction(param: Transaction, tags: Map<string, string>) {
    tags.forEach((key, value) => {
        param.addTag(key, value);
    });
}

/**
 * Get transaction status
 * @param param : GetTransactionStatusParam
 */
export async function getTransactionStatus(param: GetTransactionStatusParam): Promise<TransactionStatusResponse> {
    return arweave.transactions.getStatus(param.txid)
}

/**
 * Get transaction data from the transaction ID without getting the entire transaction
 * @param param : GetTransactionDataParam
 */
export async function getTransactionData(param: GetTransactionDataParam): Promise<string | Uint8Array> {
    return await arweave.transactions.getData(param.txid, {decode: true, string: true})
}

/**
 * Get the entire deal
 * @param param : GetTransactionParam
 */
export async function getTransaction(param: GetTransactionParam): Promise<Transaction> {
    return await arweave.transactions.get(param.txid)
}

/**
 * DecodeTheTagsInTheTransaction
 * @param param : GetTagWithTransactionParam
 */
export async function decodeTagWithTransaction(param: GetTagWithTransactionParam): Promise<Map<string, string>> {
    const transaction = await arweave.transactions.get(param.txid);
    const tags = new Map<string, string>();
    for (const tag of transaction['tags']) {
        const key = tag.get('name', {decode: true, string: true});
        const value = tag.get('value', {decode: true, string: true});
        tags.set(key, value);
    }
    return tags;
}

/**
 * Get the block information according to the independent hash
 * @param param : GetBlcokWithIndepHash
 */
export async function getBlockWithIndepHash(param: GetBlcokWithIndepHash): Promise<BlockData> {
    return await arweave.blocks.get(param.IndepHash)
}

/**
 * Get the current block information
 */
export async function getCurrentBlock(): Promise<BlockData> {
    return await arweave.blocks.getCurrent();
}

/**
 * Get the current network information according: height, current, blocks, peers, queue_length
 */
export async function getCurrentNetworkInfo(): Promise<NetworkInfoInterface> {
    return await arweave.network.getInfo()
}



