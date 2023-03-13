declare const Chains: {
  mainnet: number;
  ropsten: number;
  rinkeby: number;
  goerli: number;
  polygon: number;
  mumbai: number;
  sepolia: number;
  bsc: number;
  bsctest: number;
  avalanche: number;
  avalanchetest: number;
  fantom: number;
  cronos: number;
  cronostestnet: number;
  arbitrum: number;
  palm: number;
};
declare const chainUrls: {
  [x: number]: string;
};
declare const availableChains: number[];
declare const getChainName: (chainId: number) => string;
export { availableChains, Chains, getChainName, chainUrls };
//# sourceMappingURL=availableChains.d.ts.map
