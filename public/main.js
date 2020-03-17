"use strict";
let bitcoin = require('bitcoinjs-lib')
let bip39 = require('bip39')


window.getAddress = function (userAccount) {
    const seed = bip39.mnemonicToSeed(userAccount)
    let result = {}
    return seed.then(seed => {

        const bitcoinNetwork = bitcoin.networks.testnet
        const hdMaster = bitcoin.bip32.fromSeed(seed, bitcoinNetwork) // seed from above
        const keyPair = hdMaster.derivePath('m/0')
        // try to get private key as readable string
        const privateKeyBuffer = Buffer.from(keyPair.privateKey)
        const privateKey = privateKeyBuffer.toString('hex')
        result.privateKey = privateKey;
        result.publicKey = keyPair.publicKey.toString('hex');
        // fail to get private key as readable string
        const {address} = bitcoin.payments.p2pkh({pubkey: keyPair.publicKey})
        result.address = address;
        return result

    })


}

window.generateMultiAddr = function (publicKey1, publicKey2, networkType) {
    const pubkeys = [publicKey1, publicKey2].map(hex => Buffer.from(hex, 'hex'));
    if (networkType == "test3") {
        const {address} = bitcoin.payments.p2sh({
            redeem: bitcoin.payments.p2wsh({
                redeem: bitcoin.payments.p2ms({m: 2, pubkeys, network: bitcoin.networks.testnet})
            })
        });
        return address;
    } else {
        const {address} = bitcoin.payments.p2sh({
            redeem: bitcoin.payments.p2wsh({
                redeem: bitcoin.payments.p2ms({m: 2, pubkeys})
            })
        });
        return address;
    }

}
     