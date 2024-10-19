import {sortedJsonStringify} from "@cosmjs/amino/build/signdoc";

const { cosmos } = require("./cosmos.js");
const { google } = require("./google.js");
const crypto = require("crypto");
const secp256k1 = require("secp256k1");

export function getSignDoc(chainId: any, txBody: any, authInfo: any, accountNumber: any) {
    const bodyBytes = cosmos.tx.v1beta1.TxBody.encode(txBody).finish();
    const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();
    const signDoc = new cosmos.tx.v1beta1.SignDoc({
        chain_id: chainId,
        body_bytes: bodyBytes,
        auth_info_bytes: authInfoBytes,
        account_number: Number(accountNumber),
    });
    return signDoc;
}

export async function getAuthInfo(
    publicKey: any,
    sequence: any,
    feeAmount: any,
    feeDenom: any,
    gasLimit: any,
    mode = "direct"
) {
    let _mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT;
    if (mode === "amino") {
        _mode = cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    }

    const publicKeyProto = new cosmos.crypto.secp256k1.PubKey({
        key: publicKey,
    });

    const signerInfo = new cosmos.tx.v1beta1.SignerInfo({
        public_key: new google.protobuf.Any({
            type_url: "/cosmos.crypto.secp256k1.PubKey",
            value: cosmos.crypto.secp256k1.PubKey.encode(publicKeyProto).finish(),
        }),
        mode_info: { single: { mode: _mode } },
        sequence: Number(sequence),
    });

    const fee = new cosmos.tx.v1beta1.Fee({
        amount: [{ denom: feeDenom, amount: String(feeAmount) }],
        gas_limit: Number(gasLimit),
    });

    return new cosmos.tx.v1beta1.AuthInfo({ signer_infos: [signerInfo], fee });
}

export function getDirectSignature(signDoc: any, privateKey: any) {
    const signDocBytes = cosmos.tx.v1beta1.SignDoc.encode(signDoc).finish();
    const messageHash = crypto.createHash("sha256").update(signDocBytes).digest();
    // console.log("messageHash===", messageHash.toString("hex"))
    const signature = secp256k1.ecdsaSign(new Uint8Array(messageHash), privateKey);  // cloudHsm
    return signature;
}

export function getAminoSignature(signDoc: any, privateKey: any) {
    const messageHash = crypto
        .createHash("sha256")
        .update(sortedJsonStringify(signDoc))
        .digest();
    const signature = secp256k1.ecdsaSign(messageHash, privateKey);
    return signature;
}

