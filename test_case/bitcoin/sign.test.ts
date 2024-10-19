import { buildAndSignTx, buildUnsignTxAndSign } from "@/bitcoin";

describe('buildAndSignTx test case', () => {
    test('offline sign tx', async () => {
        const data = {
            inputs: [
                {
                    address: "",
                    txid: "",
                    amount: 100000000,
                    vout: 0,
                },
            ],
            outputs: [
                {
                    amount: 100000000,
                    address: "",
                },
            ],
        };
        const rawHex = buildAndSignTx({
            privateKey: "",
            signObj: data,
            network: "mainnet"
        });
        console.log(rawHex);
    });
});
