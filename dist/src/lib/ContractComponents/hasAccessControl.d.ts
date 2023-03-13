import { ethers } from 'ethers';
type SingleAddressOptions = {
  publicAddress: string;
  gas?: string;
};
type RenounceOptions = {
  gas?: string;
};
export default class HasAccessControl {
  contractAddress: string;
  private contractDeployed;
  setContract(contract: ethers.Contract): void;
  /**
   * Add minter function: Grant the 'minter' role to an address
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address to be elevated at 'minter' role
   * @notice Warning: This method will consume gas (30000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  addMinter(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Renounce minter function: Renounce the 'minter' role
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address that will renounce its 'minter' role
   * @notice Warning: This method will consume gas (40000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  renounceMinter(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Remove minter function: Remove the 'minter' role to an address
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address that will loose the 'minter' role
   * @notice Warning: This method will consume gas (30000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  removeMinter(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Is minter function: Check if an address has the 'minter' role or not
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address to check
   * @returns {Promise<boolean>} Promise that will return a boolean
   */
  isMinter(params: SingleAddressOptions): Promise<boolean>;
  /**
   * Add Admin function: Add the 'admin' role to an address. Only callable by
   * addresses with the admin role.
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address that will loose the 'minter' role
   * @notice Warning: This method will consume gas (30000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  addAdmin(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Remove Admin function: Remove the 'admin' role to an address. Only callable by
   * addresses with the admin role.
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address that will loose the 'minter' role
   * @notice Warning: This method will consume gas (40000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  removeAdmin(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Renounce Admin function: Remove the 'admin' role to an address. Only callable by
   * address invoking the request.
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address that will loose the 'minter' role
   * @notice Warning: This method will consume gas (30000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  renounceAdmin(params: SingleAddressOptions): Promise<ethers.providers.TransactionResponse>;
  /**
   * Is Admin function: Check whether an address has the 'admin' role
   * @param {object} params object containing all parameters
   * @param {string} params.publicAddress the address to check
   * @returns {Promise<boolean>} Promise that will return a boolean
   */
  isAdmin(params: SingleAddressOptions): Promise<boolean>;
  /**
   * Renouncing ownership of the smart contract (will leave the contract without an owner).
   * @notice Warning: This method will consume gas (25000 gas estimated)
   * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
   */
  renounceOwnership(params: RenounceOptions): Promise<ethers.providers.TransactionResponse>;
}
export {};
//# sourceMappingURL=hasAccessControl.d.ts.map
