import {Authorized, Keypair, Lockup, PublicKey, StakeProgram, Transaction} from "@solana/web3.js";

export async function createStakeAccount(params: any) {
    const {
        authorPrivateKey,
        stakeAccountPrivateKey,
        lamportsForStakeAccount,//质押金额
        recentBlockhash,
        votePubkeyStr//矿池节点publcikey
    } = params
    let tx = new Transaction();
    const fromPublicKey = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, "hex")));
    let authorizedAccount = fromPublicKey;
    const stakeAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(stakeAccountPrivateKey, 'hex')), {skipValidation: true});
    let createAccountTransaction = StakeProgram.createAccount({
        fromPubkey: fromPublicKey.publicKey,
        authorized: new Authorized(authorizedAccount.publicKey, authorizedAccount.publicKey),
        lamports: lamportsForStakeAccount,
        lockup: new Lockup(0, 0, fromPublicKey.publicKey),
        stakePubkey: stakeAccount.publicKey
    });

    tx.add(createAccountTransaction)

    let votePubkey = new PublicKey(votePubkeyStr);
    let delegateTransaction = StakeProgram.delegate({
        authorizedPubkey: authorizedAccount.publicKey,
        stakePubkey: stakeAccount.publicKey,
        votePubkey: votePubkey,
    });

    tx.add(delegateTransaction)

    tx.recentBlockhash = recentBlockhash;
    tx.sign(fromPublicKey, stakeAccount);
    return tx.serialize().toString("base64")

}

/**
 * 解锁质押账户
 * @param params
 */
export function deactiveStake(params: any) {
    const {
        authorPrivateKey,
        stakeAccountPrivateKey,
        recentBlockhash
    } = params
    let tx = new Transaction()
    const stakeAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(stakeAccountPrivateKey, 'hex')))
    const authorizeAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, 'hex')))

    let deactivateTransaction = StakeProgram.deactivate({
        stakePubkey: stakeAccount.publicKey,
        authorizedPubkey: authorizeAccount.publicKey
    })
    tx.add(deactivateTransaction)
    tx.recentBlockhash = recentBlockhash
    tx.sign(authorizeAccount, stakeAccount)
    return tx.serialize().toString('base64')


}

// 转移投票权
export async function delegateStake(params: any) {
    const {authorPrivateKey, stakeAccountPrivateKey, votePubkeyStr, recentBlockhash} = params
    let tx = new Transaction()
    const stakeAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(stakeAccountPrivateKey, 'hex')));

    const authorizedAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, 'hex')));

    let votePubkey = new PublicKey(votePubkeyStr);


    let delegateTransaction = StakeProgram.delegate({
        authorizedPubkey: authorizedAccount.publicKey,
        stakePubkey: stakeAccount.publicKey,
        votePubkey: votePubkey,
    });

    tx.add(delegateTransaction)
    tx.recentBlockhash = recentBlockhash;
    tx.sign(authorizedAccount, stakeAccount);
    return tx.serialize().toString("base64");
}

export function withdrawFunds(params: any) {
    const {
        authorPrivateKey,
        stakeAccountPrivateKey,
        stakeBalance,//质押金额
        recentBlockhash
    } = params
    let tx = new Transaction()
    const authorizedAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, 'hex')))
    const stakeAccount = Keypair.fromSecretKey(new Uint8Array(Buffer.from(stakeAccountPrivateKey, 'hex')))
    const fromPublicKey = Keypair.fromSecretKey(new Uint8Array(Buffer.from(authorPrivateKey, 'hex')))
    let withdrawTransaction = StakeProgram.withdraw({
        stakePubkey: stakeAccount.publicKey,
        authorizedPubkey: authorizedAccount.publicKey,
        toPubkey: fromPublicKey.publicKey,
        lamports: stakeBalance,
    })

    tx.add(withdrawTransaction)
    tx.recentBlockhash = recentBlockhash
    tx.sign(authorizedAccount, stakeAccount)
    return tx.serialize().toString('base64')
}