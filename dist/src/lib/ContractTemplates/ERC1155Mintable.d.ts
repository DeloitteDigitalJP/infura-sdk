import { ethers } from 'ethers';
import HasRoyalty from '../ContractComponents/hasRoyalty';
import HasAccessControl from '../ContractComponents/hasAccessControl';
export type DeployERC1155Params = {
  baseURI: string;
  contractURI: string;
  ids: number[];
  gas?: string;
};
type ContractAddressOptions = {
  contractAddress: string;
};
type MintOptions = {
  to: string;
  id: number;
  quantity: number;
  gas?: string;
};
type MintBatchOptions = {
  to: string;
  ids: number[];
  quantities: number[];
  gas?: string;
};
type AddIdsOptions = {
  ids: number[];
  gas?: string;
};
type SetBaseURIOptions = {
  baseURI: string;
  gas?: string;
};
type SetContractURIOptions = {
  contractURI: string;
  gas?: string;
};
type TransferOptions = {
  from: string;
  to: string;
  tokenId: number;
  quantity: number;
  gas?: string;
};
type SetApprovalForAllOptions = {
  to: string;
  approvalStatus: boolean;
  gas?: string;
};
type TransferBatchOptions = {
  from: string;
  to: string;
  tokenIds: number[];
  quantities: number[];
  gas?: string;
};
export default class ERC1155Mintable {
  private readonly gasLimit;
  contractAddress: string;
  accessControl: HasAccessControl;
  royalty: HasRoyalty;
  private contractDeployed;
  private readonly signer;
  constructor(signer: ethers.Wallet | ethers.providers.JsonRpcSigner);
  /**
   * Deploy ERC1155Mintable Contract. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} params.baseURI BaseURI of the contract
   * @param {string} params.ContractURI contractURI of the contract
   * @param {array} params.ids IDs of valid tokens for the contract
   * @param {number} params.gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (varies depending on array size)
   * @returns {Promise<ERC1155Mintable>} Contract
   */
  deploy(params: DeployERC1155Params): Promise<ERC1155Mintable>;
  /**
   * Load an ERC1155Mintable contract from an existing contract address. Used by the SDK class
   * @param {object} params object containing all parameters
   * @param {string} params.contractAddress Address of the ERC1155Mintable contract to load
   * @returns {ERC1155Mintable} Contract
   */
  loadContract(params: ContractAddressOptions): ERC1155Mintable;
  /**
   * Mint function: Mint a token for publicAddress
   * @param {string} to destination address of the minted token
   * @param {number} id ID of the token to mint
   * @param {number} quantity Quantity of the specified token to mint
   * @param {number} gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (52000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  mint(params: MintOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Mint function: Mint multiple tokens for publicAddress
   * @param {string} to destination address of the minted token
   * @param {number} id ID of the token to mint
   * @param {number} quantity Quantity of the specified token to mint
   * @param {number} gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (varies depending on size of array)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  mintBatch(params: MintBatchOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Allow admin of contract to add new valid token IDs
   * @param {object} params object containing all parameters
   * @param {number[]} params.ids array of IDs to add
   * @param {number} params.gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (varies depending on size of array)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  addIds(params: AddIdsOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * setBaseURI function: Set the "baseURI" metadata for the specified contract
   * @param {object} params object containing all parameters
   * @param {string} params.baseURI baseURI for the contract
   * @param {number} params.gas (Optional) gas parameter to pass to transaction
   * (URI to a JSON file describing the contract's metadata)
   * @notice Warning: This method will consume gas (35000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setBaseURI(params: SetBaseURIOptions): Promise<any>;
  /**
   * setContractURI function: Set the "contractURI" metadata for the specified contract
   * @param {object} params object containing all parameters
   * @param {string} params.contractURI ContractURI for the contract
   * (URI to a JSON file describing the contract's metadata)
   * @notice Warning: This method will consume gas (35000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  setContractURI(params: SetContractURIOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * SafeTransfer function: safeTransfer the token 'tokenId' between 'from' and 'to addresses.
   * @param {object} params object containing all parameters
   * @param {string} params.from Address who will transfer the token
   * @param {string} params.to Address that will receive the token
   * @param {number} params.tokenId ID of the token that will be transfered
   * @param {number} params.quantity quantity of the given tokenId to be transferred
   * @param {number} params.gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (53000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  transfer(params: TransferOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * TransferBatch function: safeBatchTransfer the 'tokenIds' between 'from' and 'to addresses.
   * @param {object} params object containing all parameters
   * @param {string} params.from Address who will transfer the token
   * @param {string} params.to Address that will receive the token
   * @param {number} params.tokenIds IDs of the tokens that will be transferred
   * @param {number} params.quantities quantities of the given tokenId to be transferred
   * @param {number} params.gas (Optional) gas parameter to pass to transaction
   * @notice Warning: This method will consume gas (varies depending on array size)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  transferBatch(params: TransferBatchOptions): Promise<ethers.providers.TransactionResponse>;
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
  setContracts(): void;
}
export {};
//# sourceMappingURL=ERC1155Mintable.d.ts.map