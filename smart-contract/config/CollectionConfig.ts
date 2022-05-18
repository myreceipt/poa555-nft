import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'ButanBirdvers',
  tokenName: 'Butan Birdvers',
  tokenSymbol: 'BB',
  hiddenMetadataUri: 'ipfs://Qmf7xLZaWyXECrb2g3hhouSssaanBUbJUWi9BDJ5eoXQVN/sik-ndelik.json',
  maxSupply: 1111,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 2.00,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 2.00,
    maxMintAmountPerTx: 7,
  },
  contractAddress: '0x8907745322506664921600f299C4219142D31B37',
  marketplaceIdentifier: 'butanbirdvers',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
