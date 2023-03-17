import HttpService from '../../services/httpService';
import {
  CollectionsDTO,
  MetadataDTO,
  MetadataInfo,
  NftDTO,
  TransfersDTO,
  TradeDTO,
  OwnersDTO,
  SearchNftDTO,
} from '../SDK/types';
type PublicAddressOptions = {
  publicAddress: string;
  includeMetadata?: boolean;
  cursor?: string;
};
type ContractAddressOptions = {
  contractAddress: string;
  cursor?: string;
};
type GetTokenMetadataOptions = {
  contractAddress: string;
  tokenId: string;
};
export type GetTransfersByBlockNumberOptions = {
  blockNumber: string;
  cursor?: string;
};
export type GetTransfersByBlockHashOptions = {
  blockHash: string;
  cursor?: string;
};
export type GetNftTransfersByWallet = {
  walletAddress: string;
  cursor?: string;
};
export type GetNftTransfersFromBlockToBlock = {
  fromBlock: number;
  toBlock: number;
  cursor?: string;
};
export type GetNftTransfersByContractAndToken = {
  contractAddress: string;
  tokenId: string;
  cursor?: string;
};
export type GetNftTransfersByContractAddress = {
  contractAddress: string;
  cursor?: string;
};
export type GetNftOwnersByContractAddress = {
  contractAddress: string;
  cursor?: string;
};
export type GetNftOwnersByTokenAddressAndTokenId = {
  tokenAddress: string;
  tokenId: string;
  cursor?: string;
};
export type GetLowestTradePrice = {
  tokenAddress: string;
};
export type GetCollectionsByWallet = {
  walletAddress: string;
  cursor?: string;
};
export type SearchNftsByString = {
  query: string;
  cursor?: string;
};
export default class Api {
  private readonly apiPath;
  private readonly httpClient;
  constructor(apiPath: string, httpClient: HttpService);
  /**
   * Get contract metadata by contract address
   * @param {object} opts object containing all parameters
   * @param {string} opts.contractAddress address of the contract
   * @returns {Promise<MetadataInfo>} Contract metadata object
   */
  getContractMetadata(opts: ContractAddressOptions): Promise<MetadataInfo>;
  /**
   * Get NFTs by an account address
   * @param {object} opts object containing all parameters
   * @param  {string} opts.address Account address
   * @param  {string} opts.includeMetadata flag to include the metadata object in the results
   * @returns {Promise<Array>} List of NFTs with metadata if 'includeMetadata' flag is true
   */
  getNFTs(opts: PublicAddressOptions): Promise<NftDTO>;
  /** Get list of NFTs for the specified contract address
   * @param {object} opts object containing all parameters
   * @param {string} opts.contractAddress address of the contract to get the list of NFTs
   * @returns {Promise<object>} List of NFTs with metadata
   */
  getNFTsForCollection(opts: ContractAddressOptions): Promise<NftDTO>;
  /** Get a token metadata
   * @param {object} opts object containing all parameters
   * @param {string} opts.contractAddress address of the contract which holds the token
   * @param {string} opts.tokenId ID of the token
   * @returns {Promise<object>} Token metadata
   */
  getTokenMetadata(opts: GetTokenMetadataOptions): Promise<MetadataDTO>;
  /**
   * Get transfers by block number
   * @param {object} opts object containing all parameters
   * @param {string} opts.blockNumber number of the block to get transfers from
   * @returns {Promise<object>} Transfers list
   */
  getTransfersByBlockNumber(opts: GetTransfersByBlockNumberOptions): Promise<TransfersDTO>;
  /**
   * Get transfers by block hash
   * @param {object} opts object containing all parameters
   * @param {string} opts.blockHash number of the block to get transfers from
   * @returns {Promise<object>} Transfers list
   */
  getTransfersByBlockHash(opts: GetTransfersByBlockHashOptions): Promise<TransfersDTO>;
  /**
   * Get transfers by wallet address
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Transfers list
   */
  getNftsTransfersByWallet(opts: GetNftTransfersByWallet): Promise<TransfersDTO>;
  /**
   * Get transfers from block to block
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Transfers list
   */
  getTransferFromBlockToBlock(opts: GetNftTransfersFromBlockToBlock): Promise<TransfersDTO>;
  /**
   * Get transfers by tokenId
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Transfers list
   */
  getTransfersByTokenId(opts: GetNftTransfersByContractAndToken): Promise<TransfersDTO>;
  /**
   * Get transfers by contract address
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Transfers list
   */
  getTransfersByContractAddress(opts: GetNftTransfersByContractAddress): Promise<TransfersDTO>;
  /**
   * Get lowest trade for a given token
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Trade information
   */
  getLowestTradePrice(opts: GetLowestTradePrice): Promise<TradeDTO>;
  /**
   * Get nft owners by contract address
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} OwnersDTO
   */
  getOwnersbyContractAddress(opts: GetNftOwnersByContractAddress): Promise<OwnersDTO>;
  /**
   * Get nft owners by token address and token id
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} OwnersDTO
   */
  getOwnersbyTokenAddressAndTokenId(opts: GetNftOwnersByTokenAddressAndTokenId): Promise<OwnersDTO>;
  getCollectionsByWallet(opts: GetCollectionsByWallet): Promise<CollectionsDTO>;
  /**
   * search Nfts that match a specific query string
   * @param {object} opts object containing all parameters
   * @returns {Promise<object>} Nfts  list
   */
  searchNfts(opts: SearchNftsByString): Promise<SearchNftDTO>;
}
export {};
//# sourceMappingURL=api.d.ts.map
