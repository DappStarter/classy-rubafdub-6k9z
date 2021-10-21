require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name rice stereo equip grid casual flat gift'; 
let testAccounts = [
"0x698973ad9aad8d2fb556e21439ce5838c0d9cfbe541347afe4c16c86cdb0fa53",
"0x16e6093e7df6ec08036ceabfc6ae3fb2e0a290127ae57fbe9465153b9b4c1bdb",
"0x9f56902f82280a6e0c600b3910a80d9cc784de8946793095c9d3bb30c6d7f031",
"0xd0e3389bde6fd294c0223d3951918aaecf2c60aa6cf5cffc6bc9febbadfd0c5c",
"0x3c3e92363edfc446716beeb27e8ffa77bad66dcd83eed2179875bb2feb0940c6",
"0x4b42ebdf18edf829ed842cbd0ffdb7e1930bce7f111517d29914179ceea6262b",
"0x6e97c296d487553aea91fe39bb6148f71a61ea234697caf7e4c5278a168a265d",
"0xbb27c1bdd29ba499c72aed17440975855fee872a9156dd2f20d6b7f8448406cd",
"0x1dfb2fcd023a79981b7aa65182bfe32216bf3ea56ff5d10daa9674da204f1fa2",
"0x129b1cfac2470b59cb7bf9516e2904ce882d5dacf5078863e37790aa777096b4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

