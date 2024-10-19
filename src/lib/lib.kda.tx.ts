const Pact = require("pact-lang-api");
const creationTime = () => Math.round((new Date).getTime() / 1000) - 15;

const transferCode = (sender: any, receiver: any, amount: any) => `(coin.transfer "${sender}" "${receiver}" ${amount})`;
const transferCreateCode = (sender: any, receiver: any, amount: any) => `(coin.transfer-create "${sender}" "${receiver}" (read-keyset "receiver-guard") ${amount})`;
const transferCrossChain = (sender: any, receiver: any, targetChain: any, amount: any) => `(coin.transfer-crosschain "${sender}" "${receiver}" (read-keyset "receiver-guard") "${targetChain}" ${amount})`;
const transferMeta = (sender: any, chainId: any, gasPrice: any, gasLimit: any) => Pact.lang.mkMeta(sender, chainId, gasPrice, gasLimit, creationTime(), 600);
const transferKp = (sender: any, senderKp: any, receiver: any, amount: any) => {
    return {
        ...senderKp,
        clist: [
            {"name": "coin.TRANSFER", "args": [sender, receiver, Number(amount)]},
            {"name": "coin.GAS", "args": []},
        ]
    }
};

const transferReceiverG = (pubKey: any) => {
    return {"receiver-guard": [pubKey]}
};
const transferCrossChainKp = (sender: any, receiver: any, targetChain: any, amount: any, senderKp: any) => {
    return {
        ...senderKp,
        clist: [
            {"name": "coin.TRANSFER_XCHAIN", "args": [sender, receiver, Number(amount), targetChain]},
            {"name": "coin.GAS", "args": []},
        ]
    }
};
//@ts-ignore
const keepDecimal = decimal => {
    decimal = decimal.toString();
    if (decimal.includes('.')) {
        return decimal
    }
    if ((decimal / Math.floor(decimal)) === 1) {
        decimal = decimal + ".0"
    }
    return decimal
}

export function CreateOfflineSignTx(params: any) {
    const {
        SignObj: {
            sender,
            senderPubKey,
            senderSecretKey,
            receiver,
            receiverPubKey,
            amount,
            chainId,
            targetChainId,
            networkId,
            gasPrice,
            gasLimit,
            spv,
            pactId
        },
        method,
    } = params;
    const senderKeyPair = {
        publicKey: senderPubKey,
        secretKey: senderSecretKey
    };
    let transferObj = {
        keyPairs: transferKp(sender, senderKeyPair, receiver, keepDecimal(amount)),
        transferCrossChainKp: transferCrossChainKp(sender, receiver, targetChainId, amount, senderKeyPair),
        meta: transferMeta(sender, chainId, gasPrice, gasLimit),
        envData: transferReceiverG(receiverPubKey),
        transferCode: transferCode(sender, receiver, keepDecimal(amount)),
        transferCreateCode: transferCreateCode(sender, receiver, keepDecimal(amount)),
        transferCrossChainCode: transferCrossChain(sender, receiver, targetChainId, keepDecimal(amount))
    };
    if (method === "crossTransferOffline") { // 跨链转账： 接收者公钥和注册名字必传，发送者公钥必传，接收者公钥必传
        if (spv === "" || spv === undefined) {
            return Pact.simple.exec.createCommand(
                transferObj.transferCrossChainKp,
                undefined,
                transferObj.transferCrossChainCode,
                transferObj.envData,
                transferObj.meta,
                networkId
            );
        } else {
            const meta = transferMeta(sender, targetChainId, gasPrice, gasLimit);
            return Pact.simple.cont.createCommand(
                senderKeyPair, undefined, 1, pactId, false, null, meta, spv, networkId
            )
        }
    } else if (method === "transferCreateOffline") {
        //  注册账号转账： 接收者公钥必传，接收注册名字必传，发送者公钥必传，接收者公钥必传
        return Pact.simple.exec.createCommand(
            transferObj.keyPairs,
            undefined,
            transferObj.transferCreateCode,
            transferObj.envData,
            transferObj.meta,
            networkId
        );
    } else {  // transferOffline
        // 离线转账: 接收注册名字必传, 公钥非必传，发送者公钥必传，接收者公钥必传
        return Pact.simple.exec.createCommand(
            transferObj.keyPairs,
            undefined,
            transferObj.transferCode,
            null,
            transferObj.meta,
            networkId
        )
    }
}

