/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
import { ethers } from 'ethers';
export default class Provider {
  static getProvider(rpcUrl: string | undefined): ethers.providers.BaseProvider;
  static getInjectedProvider(
    injectedProvider: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc,
  ): ethers.providers.Web3Provider;
}
//# sourceMappingURL=Provider.d.ts.map