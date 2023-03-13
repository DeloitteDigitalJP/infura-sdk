import { ethers } from 'ethers';
type RoyaltyInfoOptions = {
  tokenId: number;
  sellPrice: number;
};
type SetDefaultRoyaltyOptions = {
  publicAddress: string;
  fee: number;
  gas?: string;
};
type DeleteDefaultRoyaltyOptions = {
  gas?: string;
};
type SetTokenRoyaltyOptions = {
  tokenId: number;
  publicAddress: string;
  fee: number;
  gas?: string;
};
type ResetTokenRoyaltyOptions = {
  tokenId: number;
  gas?: string;
};
export default class HasRoyaltyExtend {
  contractAddress: string;
  private contractDeployed;
  /**
   * Set contract information from the calling class (ERC721, ERC721User, ...)
   * @param {ethers.Contract} contract instance of the deployed contract
   * @returns void
   */
  setContract(contract: ethers.Contract): void;
  /**
   * Set the default royalty information with the specified receiver address and fee
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress - address
   * @param {number} params.fee - fee
   * @notice Warning: This method will consume gas (49000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} - Transaction
   */
  setDefaultRoyalty(
    params: SetDefaultRoyaltyOptions,
  ): Promise<ethers.providers.TransactionResponse>;
  /**
   * delete the default royalty information
   * @param {object} params object containing all parameters
   * @notice Warning: This method will consume gas (??? gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} - Transaction
   */
  deleteDefaultRoyalty(
    params: DeleteDefaultRoyaltyOptions,
  ): Promise<ethers.providers.TransactionResponse>;
  /**
   * Set the token royalty information with the specified token id, receiver address and fee
   * @param {object} params object containing all parameters
   * @param {number} params.tokenId - Token ID
   * @param {string} params.publicAddress - address
   * @param {number} params.fee - fee
   * @notice Warning: This method will consume gas (??? gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} - Transaction
   */
  setTokenRoyalty(params: SetTokenRoyaltyOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * reset the token royalty information
   * @param {object} params object containing all parameters
   * @param {number} params.tokenId - Token ID
   * @notice Warning: This method will consume gas (??? gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} - Transaction
   */
  resetTokenRoyalty(
    params: ResetTokenRoyaltyOptions,
  ): Promise<ethers.providers.TransactionResponse>;
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
//# sourceMappingURL=hasRoyaltyExtend.d.ts.map
