import * as SPLToken from '@solana/spl-token';
import {
    Connection,
    Keypair,
    NONCE_ACCOUNT_LENGTH,
    NonceAccount,
    PublicKey,
    Signer,
    SystemProgram,
    Transaction
} from '@solana/web3.js';
import * as buffer from "buffer";
import {u64} from "@solana/spl-token";

const bs58 = require('bs58');
const {derivePath, getPublicKey} = require('ed25519-hd-key');
const BigNumber = require('bignumber.js');

const staking = "STAKING"//质押
const createStakeDelegate = "CREATE_STAKE_DELEGATE"//创建质押并委托资金
const unstakeAll = "UNSTAKE_ALL"//解除质押
const withdrawAll = "WITHDRAW_ALL"//提取质押

export async function signSolTransaction(params: any) {
    const {
        txObj: {
            from,
            amount,
            to,
            nonce,//nonce值
            nonceAccountAddress,//nonce 账户地址
            authorAddress,//验证账户地址
            stakeAddress,//质押账户地址
            decimal,//代币精度
            txType,//交易类型
            mintAddress,//代币地址
            hasCreateTokenAddr,//是否创建代币
            validator,//矿池节点publickey
            blindType,//绑定的业务类型
            stakingType,//质押类型
        },
        privs
    } = params;
    //生成keypair
    //from
    const privateKeyByFrom = (privs?.find((ele: { address: any; }) => ele.address === from))?.key;
    if (!privateKeyByFrom) throw new Error("privateKeyByFrom 为空");
    //author
    const privateKeyByAuthor = (privs?.find((ele: { address: any; }) => ele.address === authorAddress))?.key;
    if (!privateKeyByAuthor) throw new Error("privateKeyByAuthor 为空");

    const authorKeyPair = Keypair.fromSecretKey(new Uint8Array(Buffer.from(privateKeyByAuthor, "hex")));
    const fromKeyPair = Keypair.fromSecretKey(new Uint8Array(Buffer.from(privateKeyByFrom, "hex")));

    //精度校验
    const calcAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString();
    //判断是否有小数
    if (calcAmount.indexOf('.') != -1) throw new Error('decimal 无效');

    //创建交易
    let tx = new Transaction();
    let tx_with_create_token = new Transaction();

    tx.recentBlockhash = nonce;
    const toPubkey = new PublicKey(to);
    const fromPubkey = new PublicKey(from);

    if (blindType === staking) {
        //质押
    } else {
        if (txType === "TRANSFER_TOKEN") {
            //代币转账
            const mint = new PublicKey(mintAddress);
            const fromTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                fromPubkey
            )
            const toTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                toPubkey
            )
            tx.add(
                SystemProgram.nonceAdvance({
                    noncePubkey: new PublicKey(nonceAccountAddress),
                    authorizedPubkey: authorKeyPair.publicKey,
                }),
                SPLToken.Token.createTransferInstruction(
                    SPLToken.TOKEN_PROGRAM_ID,
                    fromTokenAccount,
                    toTokenAccount,
                    fromPubkey,
                    [fromKeyPair, authorKeyPair],
                    calcAmount
                ),
            )
            if (!hasCreateTokenAddr) {
                tx_with_create_token.add(
                    SystemProgram.nonceAdvance({
                        noncePubkey: new PublicKey(nonceAccountAddress),
                        authorizedPubkey: authorKeyPair.publicKey,
                    }),
                    SPLToken.Token.createAssociatedTokenAccountInstruction(
                        SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                        SPLToken.TOKEN_PROGRAM_ID,
                        mint,
                        toTokenAccount,
                        toPubkey,
                        fromKeyPair.publicKey
                    ),
                    SPLToken.Token.createTransferInstruction(
                        SPLToken.TOKEN_PROGRAM_ID,
                        fromTokenAccount,
                        toTokenAccount,
                        fromPubkey,
                        [fromKeyPair, authorKeyPair],
                        calcAmount
                    )
                )
            }

        } else {
            //主币转账
            tx.add(
                SystemProgram.nonceAdvance({
                    noncePubkey: new PublicKey(nonceAccountAddress),
                    authorizedPubkey: authorKeyPair.publicKey,
                }),
                SystemProgram.transfer({
                    fromPubkey: fromPubkey,
                    toPubkey: toPubkey,
                    lamports: calcAmount
                })
            )
        }

    }
    //签名,fromKeyPair签名,authorKeyPair验证
    //from,转账地址
    //author,验证地址
    tx.sign(fromKeyPair, authorKeyPair);
    //序列化
    const serializeMsg = tx.serialize().toString("base64");
    if (txType === "TRANSFER_TOKEN") {
        if (!hasCreateTokenAddr) {
            //创建接收方的ata账户，包含创建指令，使用这个hash:serializedMsg_with_create_token
            tx_with_create_token.recentBlockhash = nonce
            tx_with_create_token.sign(fromKeyPair, authorKeyPair)
            const serializedMsg_with_create_token = tx_with_create_token.serialize().toString('base64')
            return JSON.stringify([serializedMsg_with_create_token, serializeMsg])
        } else {
            //接收方存在ata,使用这个hash:serializeMsg
            return JSON.stringify([serializeMsg])
        }
    }
    return serializeMsg

}

export async function signSolTransaction2(connection: Connection, params: any) {
    const {
        txObj: {
            from,
            amount,
            to,
            nonce,//nonce值
            nonceAccountAddress,//nonce 账户地址
            authorAddress,//验证账户地址
            decimal,//代币精度
            txType,//交易类型
            mintAddress,//代币地址
            hasCreateTokenAddr,//是否创建代币
            blindType,//绑定的业务类型
        },
        privs
    } = params;

    //生成keypair
    const privateKeyByFrom = (privs?.find((ele: { address: any; }) => ele.address === from))?.key;
    if (!privateKeyByFrom) throw new Error("privateKeyByFrom 为空");

    const privateKeyByAuthor = (privs?.find((ele: { address: any; }) => ele.address === authorAddress))?.key;
    if (!privateKeyByAuthor) throw new Error("privateKeyByAuthor 为空");

    const authorKeyPair = Keypair.fromSecretKey(new Uint8Array(Buffer.from(privateKeyByAuthor, "hex")));
    const fromKeyPair = Keypair.fromSecretKey(new Uint8Array(Buffer.from(privateKeyByFrom, "hex")));

    //精度校验
    const calcAmount = new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString();
    if (calcAmount.indexOf('.') != -1) throw new Error('decimal 无效');

    const tx = new Transaction();
    tx.recentBlockhash = nonce;
    const toPubkey = new PublicKey(to);
    const fromPubkey = new PublicKey(from);

    try {
        if (blindType === 'staking') {
            // 实现质押逻辑，此处仅作占位符
            throw new Error("Staking logic not implemented");
        } else if (txType === "TRANSFER_TOKEN") {
            const mint = new PublicKey(mintAddress);

            const fromTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                fromPubkey
            );
            const toTokenAccount = await SPLToken.Token.getAssociatedTokenAddress(
                SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                SPLToken.TOKEN_PROGRAM_ID,
                mint,
                toPubkey
            );

            const toAccountInfo = await connection.getAccountInfo(toTokenAccount);

            if (!toAccountInfo && !hasCreateTokenAddr) {
                tx.add(
                    SPLToken.Token.createAssociatedTokenAccountInstruction(
                        SPLToken.ASSOCIATED_TOKEN_PROGRAM_ID,
                        SPLToken.TOKEN_PROGRAM_ID,
                        mint,
                        toTokenAccount,
                        toPubkey,
                        fromKeyPair.publicKey // 使用 fromKeyPair 作为费用支付方
                    )
                );
            }

            tx.add(
                SystemProgram.nonceAdvance({
                    noncePubkey: new PublicKey(nonceAccountAddress),
                    authorizedPubkey: authorKeyPair.publicKey,
                }),
                SPLToken.Token.createTransferInstruction(
                    SPLToken.TOKEN_PROGRAM_ID,
                    fromTokenAccount,
                    toTokenAccount,
                    fromPubkey,
                    [fromKeyPair], // 只使用 fromKeyPair 签名
                    new BigNumber(calcAmount).toNumber()
                )
            );


        } else {  // 主币转账
            tx.add(
                SystemProgram.nonceAdvance({
                    noncePubkey: new PublicKey(nonceAccountAddress),
                    authorizedPubkey: authorKeyPair.publicKey,
                }),
                SystemProgram.transfer({
                    fromPubkey: fromPubkey,
                    toPubkey: toPubkey,
                    lamports: new BigNumber(calcAmount).toNumber()
                })
            );
        }


        tx.sign(fromKeyPair, authorKeyPair); // authorKeyPair 可能不需要签名，取决于你的 nonce 账户设置
        return tx.serialize().toString("base64");


    } catch (error) {
        console.error("交易构建过程中发生错误:", error);
        throw error;
    }
}