import { ethers } from 'ethers';
import HasRoyalty from '../ContractComponents/hasRoyaltyExtend';
import HasAccessControl from '../ContractComponents/hasAccessControl';
import BaseERC721 from '../ContractComponents/baseERC721';
export type DeployParams = {
  name: string;
  symbol: string;
  contractURI: string;
  gas?: string;
};
type ContractAddressOptions = {
  contractAddress: string;
};
type MintOptions = {
  publicAddress: string;
  tokenURI: string;
  gas?: string;
};
type MintWithRoyaltyOptions = {
  publicAddress: string;
  tokenURI: string;
  royaltyAddress: string;
  fee: number;
  gas?: string;
};
type SetContractURIOptions = {
  contractURI: string;
  gas?: string;
};
export default class ERC721MintableRoyaltyExtend {
  private readonly gasLimit;
  readonly ADMIN_ROLE = '0x0000000000000000000000000000000000000000000000000000000000000000';
  readonly MINTER_ROLE = '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6';
  contractAddress: string;
  royalty: HasRoyalty;
  accessControl: HasAccessControl;
  baseERC721: BaseERC721;
  private contractDeployed;
  private readonly signer;
  constructor(signer: ethers.Wallet | ethers.providers.JsonRpcSigner);
  /**
   * Deploy ERC721MintableRoyaltyExtend Contract. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} params.name Name of the contract
   * @param {string} params.symbol Symbol of the contract
   * @param {string} params.contractURI ContractURI for the contract
   * (link to a JSON file describing the contract's metadata)
   * @notice Warning: This method will consume gas (4000000 gas estimated)
   * @returns {Promise<ERC721MintableRoyaltyExtend>} Contract
   */
  deploy(params: DeployParams): Promise<ERC721MintableRoyaltyExtend>;
  /**
   * Mint function: Mint a token for publicAddress with the tokenURI provided
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress destination address of the minted token
   * @param {string} params.tokenURI link to the JSON object containing metadata about the token
   * @notice Warning: This method will consume gas (120000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  mint(params: MintOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Mint function: Mint a token for publicAddress with the tokenURI provided
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress destination address of the minted token
   * @param {string} params.tokenURI link to the JSON object containing metadata about the token
   * @notice Warning: This method will consume gas (120000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  mintWithRoyalty(params: MintWithRoyaltyOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Load an ERC721MintableRoyaltyExtend contract from an existing contract address. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} params.contractAddress Address of the ERC721MintableRoyaltyExtend contract to load
   * @returns {ERC721MintableRoyaltyExtend} Contract
   */
  loadContract(params: ContractAddressOptions): ERC721MintableRoyaltyExtend;
  /**
   * setContractURI function: Set the "contractURI" metadata for the specified contract
   * @param {object} params object containing all parameters
   * @param {string} params.contractURI ContractURI for the contract
   * (URI to a JSON file describing the contract's metadata)
   * @notice Warning: This method will consume gas (35000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setContractURI(params: SetContractURIOptions): Promise<ethers.providers.TransactionResponse>;
}
export {};
//# sourceMappingURL=ERC721MintableRoyaltyExtend.d.ts.map