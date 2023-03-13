import { ethers } from 'ethers';
type RoyaltyInfoOptions = {
  tokenId: number;
  sellPrice: number;
};
type SetRoyaltiesOptions = {
  publicAddress: string;
  fee: number;
  gas?: string;
};
export default class HasRoyalty {
  contractAddress: string;
  private contractDeployed;
  /**
   * Set contract information from the calling class (ERC721, ERC721User, ...)
   * @param {ethers.Contract} contract instance of the deployed contract
   * @returns void
   */
  setContract(contract: ethers.Contract): void;
  /**
   * Set royalties information for the receiver address with the provided fee
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress - address
   * @param {number} params.fee - fee
   * @notice Warning: This method will consume gas (49000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} - Transaction
   */
  setRoyalties(params: SetRoyaltiesOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Returns receiver address and royalty amount based on sell price
   * @param {object} params object containing all parameters
   * @param {number} params.tokenId - Token ID
   * @param {number} params.sellPrice - Sell price
   * @returns {Promise<object>} - Returns receiver address and bigNumber
   * representing royalty amount based on sell price
   */
  royaltyInfo(params: RoyaltyInfoOptions): Promise<object>;
}
export {};
//# sourceMappingURL=hasRoyalty.d.ts.map
