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
  contractName: 'PrinceOfAbyss',
  tokenName: 'Prince Of Abyss',
  tokenSymbol: 'POA',
  hiddenMetadataUri: 'ipfs://Qmf7xLZaWyXECrb2g3hhouSssaanBUbJUWi9BDJ5eoXQVN/sik-ndelik.json',
  maxSupply: 1111,
  whitelistSale: {
    price: 0.00,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 3.00,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 3.00,
    maxMintAmountPerTx: 7,
  },
  contractAddress: '0x6E463e233882c1B26a6148dC030269ef11A5C742',
  marketplaceIdentifier: 'princeofabyss',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
