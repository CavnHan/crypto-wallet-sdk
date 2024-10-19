const { cosmos } = require("./cosmos.js");
const { google } = require("./google.js");

export function createSendMessage(fromAddress: any, toAddress: any, amount: any, denom: any) {
    const rawMsg = new cosmos.bank.v1beta1.MsgSend({
        from_address: fromAddress,
        to_address: toAddress,
        amount: [{ amount: String(amount), denom: denom }],
    });

    return new google.protobuf.Any({
        type_url: "/cosmos.bank.v1beta1.MsgSend",
        value: cosmos.bank.v1beta1.MsgSend.encode(rawMsg).finish(),
    });
}

export function createTxBody(messages: any, memo = "") {
    return new cosmos.tx.v1beta1.TxBody({ messages, memo });
}

export function createTxRawBytes(txBody: any, authInfo: any, signature: { signature: any; }) {
    const txBodyBytes = cosmos.tx.v1beta1.TxBody.encode(txBody).finish();
    const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
    const txRaw = new cosmos.tx.v1beta1.TxRaw({
        body_bytes: txBodyBytes,
        auth_info_bytes: authInfoBytes,
        signatures: [signature.signature],
    });
    return cosmos.tx.v1beta1.TxRaw.encode(txRaw).finish();
}

