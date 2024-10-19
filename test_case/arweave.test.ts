import {afterAll, beforeAll, describe, test} from '@jest/globals'; // 使用 Jest 提供的 describe 和 test
import {createArWeaveWallet, importPrivateKey, importPublicKey, verifyAddress} from '../src/arweave/address'
import {
    createDataTransaction, DataTransactionParam,
    createWalletTransaction, WalletTransactionParam,
    sign, SignTransactionParam,
    submitTransactionUpload, SubmitTransactionUploadParam,
    submitTransactionSmallUpload, SubmitTransactionSmallUploadParam
} from '../src/arweave/sign'
import {expect} from "@jest/globals";
import ArLocal from 'arlocal'
import Transaction from "arweave/node/lib/transaction";
import axios from 'axios';


describe('arweave wallet test', () => {
    /**
     * 注意：
     * 如果使用代码启动arlocal,测试完后数据不会保存，需要保存需要指定dbPath,推荐使用：npx arlocal 控制台常驻节点
     *
     */

    //init arlocal
    // let arLocal: ArLocal;
    // beforeAll(async () => {
        // port = What port to use for ArLocal.
        // showLogs = Should we show logs.
        // dbPath = folder where the db will be temporary stored.
        // persist = Whether or not data stored should be persisted among server restarts.
    //     arLocal = new ArLocal(1984, true, '.db', true)
    //     await arLocal.start()
    //
    //     process.env.ARWEAVE_GATEWAY_URL = 'http://localhost:1984';
    //     //mint Ar to wallet
    //     const walletAddress = '';
    //     const amountToMint = 20; // arlocal mint winston， 1 AR = 10^12 winston
    //     const mintUrl = `http://localhost:1984/mint/${walletAddress}/${amountToMint * 1000000000000}`; // 注意单位转换
    //     try {
    //         const response = await axios.get(mintUrl);
    //         if (response.status === 200) {
    //             console.log(`Successfully minted ${amountToMint} AR to ${walletAddress}`);
    //         } else {
    //             console.error(`Failed to mint AR: ${response.status} ${response.statusText}`);
    //         }
    //     } catch (error) {
    //         console.error(`Error minting AR:`, error);
    //     }
    //     await axios.get('http://localhost:1984/mine');  // immediately dig out a block
    //     await new Promise(resolve => setTimeout(resolve, 1000));
    // });
    //
    // afterAll(async () => {
    //     await arLocal.stop();
    //     console.log('arlocal stopped !')
    // })

    test('create wallet', async () => {
        const wallet = await createArWeaveWallet()
        console.log(wallet)
    })

    test('import public key', async () => {
        const publicKey = ''
        const address = await importPublicKey(publicKey)
        expect(typeof address).toBe("string");
        expect(address).toBe("");
    })
    test('import private key', async () => {
        const jwk = require('./fixtures/jwk.json')
        const address = await importPrivateKey(jwk)
        expect(typeof address).toBe("string");
        expect(address).toBe("");
    })
    test('verify address', async () => {
        const address = ''
        const res = await verifyAddress(address)
        expect(res).toBe(true)
    })

    test('create data transaction', async () => {
        const jwk = require('./fixtures/jwk.json')
        const param = {
            key: jwk,
            data: 'test data : Cavn aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdfsdffffffffffffffffffffffff',
            // data: 'test data: 因为困难多壮志，不教红尘惑坚心'
            //交易锚点
            last_tx:'',
            //交易价格
            reward: ''
        } as DataTransactionParam;
        let transaction = await createDataTransaction(param);
        console.log('transaction:\n', transaction)
    })

    test('create wallet transaction', async () => {
        const jwk = require('./fixtures/jwk.json')
        const param = {
            key: jwk,
            target: '',
            quantity: '0.01',
            last_tx:'',
            reward: '13947468313'
        } as WalletTransactionParam;
        let transaction = await createWalletTransaction(param);
        console.log('transaction:\n', transaction)
    })

    test('sign transaction', async () => {
        const jwk = require('./fixtures/jwk.json')
        // const transactionData = require('./fixtures/transaction.json')
        const transactionData = {
            //constructYourOwnParameters
            //....
        } as Transaction
        const param = {
            transaction: transactionData,
            key: jwk
        } as SignTransactionParam
        const transaction = await sign(param)
        console.log('transaction:\n', transaction)
    })

    test('submit transaction upload', async () => {
        const transactionData = {
            //constructYourOwnParameters
            //....
        } as Transaction
        const param = {
            tx: transactionData
        }
        const result = await submitTransactionUpload(param)

    })


})

