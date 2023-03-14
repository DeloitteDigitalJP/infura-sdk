import { ethers } from 'ethers';
type TransferOptions = {
  from: string;
  to: string;
  tokenId: number;
  gas?: string;
};
type SetApprovalForAllOptions = {
  to: string;
  approvalStatus: boolean;
  gas?: string;
};
type ApproveTransferOptions = {
  to: string;
  tokenId: number;
  gas?: string;
};
type RenounceOptions = {
  gas?: string;
};
export default class BaseERC721 {
  contractAddress: string;
  private contractDeployed;
  /**
   * Set contract information from the calling class (ERC721, ERC721User, ...)
   * @param {ethers.Contract} contract instance of the deployed contract
   * @returns void
   */
  setContract(contract: ethers.Contract): void;
  /**
   * Transfer function: Transfer the token 'tokenId' between 'from' and 'to addresses.
   * @param {object} params object containing all parameters
   * @param {string} params.from Address who will transfer the token
   * @param {string} params.to Address that will receive the token
   * @param {number} params.tokenId ID of the token that will be transfered
   * @notice Warning: This method will consume gas (62000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  transfer(params: TransferOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * setApprovalForAll will give the full approval rights for a given address
   * @param {object} params object containing all parameters
   * @param {string} params.to Address which will receive the approval rights
   * @param {boolean} params.approvalStatus Boolean representing the approval to be given (true)
   *  or revoked (false)
   * @notice Warning: This method will consume gas (46000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setApprovalForAll(
    params: SetApprovalForAllOptions,
  ): Promise<ethers.providers.TransactionResponse>;
  /**
   * Gives permission to to to transfer tokenId token to another address.
   * @param {object} params object containing all parameters
   * @param {string} params.to the address that will be approved to do the transfer.
   * @param {number} params.tokenId tokenId the nft id to transfer.
   * @notice Warning: This method will consume gas (50000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  approveTransfer(params: ApproveTransferOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Renouncing ownership of the smart contract (will leave the contract without an owner).
   * @notice Warning: This method will consume gas (25000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  renounceOwnership(params: RenounceOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * setContractURI function: Set the "contractURI" metadata for the specified contract
   * @param {string} contractURI ContractURI for the contract
   * (URI to a JSON file describing the contract's metadata)
   * @notice Warning: This method will consume gas (35000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setContractURI({ contractURI, gas }: { contractURI: string; gas?: string }): Promise<any>;
}
export {};
//# sourceMappingURL=baseERC721.d.ts.map