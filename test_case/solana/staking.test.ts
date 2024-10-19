const bs58 = require("bs58")
const bip39 = require("bip39")
const {derivePath, getPublicKey} = require('ed25519-hd-key')
import {createStakeAccount, delegateStake, deactiveStake, withdrawFunds} from '@/solana/staking/account'

describe('stake unit test', () => {
    test('create stake account', async () => {
        const params = {
            authorPrivateKey: "",
            stakeAccountPrivateKey: "",
            lamportsForStakeAccount: 8000000,
            recentBlockhash: "",
            votePubkeyStr: ""
        }
        const txSignHex = await createStakeAccount(params)
        console.log("txSignHex==\n", txSignHex)
    });


    test('delegate stake', async () => {
        const params = {
            authorPrivateKey: "",
            stakeAccountPrivateKey: "",
            recentBlockhash: "",
            votePubkeyStr: ""
        }
        const txSignHex = await delegateStake(params)
        console.log("txSignHex==", txSignHex)

    });


    test('deactivate stake', async () => {
        const params = {
            authorPrivateKey: "",
            stakeAccountPrivateKey: "",
            recentBlockhash: "",
        }
        const txSignHex = deactiveStake(params)
        console.log("txSignHex==", txSignHex)
    });

    test('withdraw funds', async () => {
        const params = {
            authorPrivateKey: "",
            stakeAccountPrivateKey: "",
            recentBlockhash: "",
            stakeBalance: 8000000,
        }
        const txSignHex = withdrawFunds(params)
        console.log("txSignHex==\n", txSignHex)
    });
})