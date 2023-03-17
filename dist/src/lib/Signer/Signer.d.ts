/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
import { ethers } from 'ethers';
export default class Signer {
  static getWallet(
    privateKey: string,
    provider: ethers.providers.BaseProvider | ethers.providers.Web3Provider,
  ): ethers.Wallet;
}
//# sourceMappingURL=Signer.d.ts.map
