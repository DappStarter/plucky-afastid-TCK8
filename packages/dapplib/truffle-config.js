require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name radar office common inner enroll army gauge'; 
let testAccounts = [
"0xb1dc2960b926eb7ccb3c18dc66a24e64c5b89005d4d79a45082a92f840e1cbc1",
"0x40a347765502f4934e4df384d3dd5c456a04d7b973b82c81eefd5429b4c19045",
"0x9eb45d9d6e2d9e658584680ca6dbaf1ba7d0f3196897ca0903e002c920a8c151",
"0x4e48fbbcebea29af758576267eab1f2629225b7b3a4d8390f2e0e4021913651f",
"0x9de33b27031f85b1b97b85c97c188b7347465c2a884dbf032ef2aea45a9f82d8",
"0xef766cdcd39ee79e0a3fe9a91b1b98e3a355d49faf4ed0ad895b3b77315be67c",
"0x67c87ccd27e7a5e6daa9499d30bedd376aff7f1defcd98bf64b8dc0177a579f7",
"0x05340cdafd6eadd92f446b7beb698286b904e28211ea004728bb73c5fd7b4828",
"0x64a74c14f0a657f92394e8afa5e6112645bfca8ecf980d5eb73f9eb062848632",
"0xfaf4c849329440a7672e251dd60e27301bcc11c42122b5d4187fee4ce54303b1"
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

