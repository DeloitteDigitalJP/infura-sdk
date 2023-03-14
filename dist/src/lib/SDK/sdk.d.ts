import { ethers } from 'ethers';
import Auth from '../Auth/Auth';
import ERC721Mintable from '../ContractTemplates/ERC721Mintable';
import ERC721UserMintable from '../ContractTemplates/ERC721UserMintable';
import ERC1155Mintable from '../ContractTemplates/ERC1155Mintable';
import Api from '../Api/api';
import {
  DeployOptionsERC1155UserMintable,
  DeployOptionsMintable,
  DeployOptionsUserMintable,
  GetStatusOptions,
  LoadContractOptions,
} from './types';
import ERC721MintableRoyaltyExtend from '../ContractTemplates/ERC721MintableRoyaltyExtend';
export declare const classes: {
  ERC721Mintable: typeof ERC721Mintable;
  ERC721UserMintable: typeof ERC721UserMintable;
  ERC1155Mintable: typeof ERC1155Mintable;
  ERC721MintableRoyaltyExtend: typeof ERC721MintableRoyaltyExtend;
};
export declare class SDK {
  private readonly auth;
  readonly api: Api;
  private readonly ipfsClient;
  constructor(auth: Auth);
  /** Get provider
   * @returns {ethers.Wallet | ethers.providers.JsonRpcProvider} return the provider
   */
  getProvider(): ethers.Wallet | ethers.providers.JsonRpcSigner;
  infuraSupported(): boolean;
  /**
   * Deploy Contract on the blockchain
   * @param {object} opts object containing all parameters
   * @param {string} opts.template name of the template to use (ERC721Mintable, ...)
   * @param {object} opts.params template parameters (name, symbol, contractURI, ...)
   * @returns {Promise<ERC721Mintable>} Contract instance
   */
  deploy(opts: DeployOptionsMintable): Promise<ERC721Mintable>;
  deploy(opts: DeployOptionsUserMintable): Promise<ERC721UserMintable>;
  deploy(opts: DeployOptionsERC1155UserMintable): Promise<ERC1155Mintable>;
  /**
   * Load a contract from an existing contract address and a template
   * @param {object} opts object containing all parameters
   * @param {string} opts.template name of the template to use (ERC721Mintable, ...)
   * @param {string} opts.contractAddress address of the contract to load
   * @returns {Promise<any>} Contract instance
   */
  loadContract(opts: LoadContractOptions): Promise<any>;
  /**
   * Returns the current network's gas price in Gwei for transactions
   * @returns {Promise<string>} Current price of gas in Gwei
   */
  getGasPrice(): Promise<string>;
  /** Get tx status
   * @param {object} opts object containing all parameters
   * @param {string} opts.txHash hash of the transaction
   * @returns {Promise<ethers.providers.TransactionReceipt>} Transaction information
   */
  getStatus(opts: GetStatusOptions): Promise<ethers.providers.TransactionReceipt>;
  /** Store file on ipfs
   * @param {string} metadata path to local file or url
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  storeFile({ metadata }: { metadata: string }): Promise<string>;
  /** Store metadata on ipfs
   * @param {string} metadata valid json metadata
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  storeMetadata({ metadata }: { metadata: string }): Promise<string>;
  /** Store array of metadata on ipfs
   * @param {Array<any>} metadata an array of valid JSON Metadata
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  createFolder({
    metadata,
    isErc1155,
  }: {
    metadata: string[];
    isErc1155: boolean;
  }): Promise<string>;
}
//# sourceMappingURL=sdk.d.ts.map