/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
import { ethers } from 'ethers';
import IPFS from '../../services/ipfsService';
type IPFSType = {
  projectId: string | undefined;
  apiKeySecret: string | undefined;
};
type AuthOptions = {
  privateKey?: string | undefined;
  projectId: string | undefined;
  secretId: string | undefined;
  rpcUrl?: string | undefined;
  chainId: number | undefined;
  provider?: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc;
  ipfs?: IPFSType;
};
export default class Auth {
  private privateKey;
  private projectId;
  private secretId;
  private rpcUrl;
  private provider;
  private chainId;
  private ipfs;
  constructor(opts: AuthOptions);
  getChainId(): number | undefined;
  getRpcUrl(): string | undefined;
  getApiAuthHeader(): {
    Authorization: string;
  };
  private base64encode;
  getIpfsClient(): IPFS;
  getApiAuth(): string;
  getSigner(): ethers.Wallet | ethers.providers.JsonRpcSigner;
  setProvider(
    provider: ethers.providers.ExternalProvider | ethers.providers.JsonRpcFetchFunc | undefined,
  ): void;
}
export {};
//# sourceMappingURL=Auth.d.ts.map
