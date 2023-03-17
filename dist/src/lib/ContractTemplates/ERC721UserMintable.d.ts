import { ethers } from 'ethers';
import HasRoyalty from '../ContractComponents/hasRoyalty';
import HasAccessControl from '../ContractComponents/hasAccessControl';
import BaseERC721 from '../ContractComponents/baseERC721';
export type DeployParams = {
  name: string;
  symbol: string;
  baseURI: string;
  contractURI: string;
  maxSupply: number;
  price: string;
  maxTokenRequest: number;
  gas?: string;
};
type ContractAddressOptions = {
  contractAddress: string;
};
type MintOptions = {
  quantity: number;
  cost: string;
};
type ReserveOptions = {
  quantity: number;
  gas?: string;
};
type RevealOptions = {
  baseURI: string;
  gas?: string;
};
type SetPriceOptions = {
  price: string;
  gas?: string;
};
type SetBaseURIOptions = {
  baseURI: string;
  gas?: string;
};
export default class ERC721UserMintable {
  private readonly gasLimit;
  contractAddress: string;
  royalty: HasRoyalty;
  accessControl: HasAccessControl;
  baseERC721: BaseERC721;
  private contractDeployed;
  private readonly signer;
  constructor(signer: ethers.Wallet | ethers.providers.JsonRpcSigner);
  /**
   * Deploy ERC721UserMintable Contract. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} params.name Name of the contract
   * @param {string} params.symbol Symbol of the contract
   * @param {string} params.baseURI baseURI for the contract
   * @param {string} params.maxSupply Maximum supply of tokens for the contract
   * @param {string} params.price Price to mint one token
   * @returns {Promise<ERC721Mintable>} Contract
   */
  deploy(params: DeployParams): Promise<ERC721UserMintable>;
  /**
   * Load an ERC721UserMintable contract from an existing contract address. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} contractAddress Address of the ERC721UserMintable contract to load
   * @returns {ERC721UserMintable} Contract
   */
  loadContract(params: ContractAddressOptions): ERC721UserMintable;
  /**
   * Mint function: Mint a token for publicAddress with the tokenURI provided
   * @param {object} params object containing all parameters
   * @param {number} params.quantity amount of token to mint
   * @param {string} params.cost cost for each token
   * @notice Warning: This method will consume gas (120000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  mint(params: MintOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Returns the value of the mint per token (in Ether)
   * @returns {string} value in Ether of the mint per token
   */
  price(): Promise<string>;
  /**
   * Reserves (mints) an amount of tokens to the owner of the contract
   * @param {object} params object containing all parameters
   * @param {number} params.quantity The quantity of tokens to mint to the owner (1-20)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  reserve(params: ReserveOptions): Promise<any>;
  /**
   * Sets the status of the contract to revealed and sets the baseURI
   * @param {object} params object containing all parameters
   * @param {string} params.baseURI The baseURI of the contract
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  reveal(params: RevealOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * setBaseURI function: Set the "baseURI" metadata for the specified contract
   * @param {object} params object containing all parameters
   * @param {string} params.baseURI baseURI for the contract
   * (URI to a JSON file describing the contract's metadata)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setBaseURI(params: SetBaseURIOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Sets the price (in Ether) of the mint
   * @param {object} params object containing all parameters
   * @param {string} params.price Price of the mint (per token) in Ether as a string
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setPrice(params: SetPriceOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Toggles the sale status of the contract
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  toggleSale(gas?: string): Promise<ethers.providers.TransactionResponse>;
  /**
   * Withdraws ether balance to owner address
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  withdraw(gas?: string): Promise<ethers.providers.TransactionResponse>;
}
export {};
//# sourceMappingURL=ERC721UserMintable.d.ts.map
