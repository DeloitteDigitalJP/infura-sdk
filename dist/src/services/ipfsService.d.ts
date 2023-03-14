/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
export default class IPFS {
  ipfsClient: import('ipfs-http-client/types/src/types').IPFSHTTPClient;
  constructor({
    projectId,
    apiKeySecret,
  }: {
    projectId: string | undefined;
    apiKeySecret: string | undefined;
  });
  /** Upload free content data on ipfs
   * @param {string} metadata any string
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  uploadContent({ source }: { source: string }): Promise<string>;
  /** Upload file on ipfs
   * @param {string} metadata path to local file or url
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  uploadFile({ source }: { source: string }): Promise<string>;
  /** upload array of metadata on ipfs
   * @param {Array<any>} metadata an array of valid JSON Metadata
   * @returns {Promise<string>} Ipfs hash of the stored data
   */
  uploadArray({ sources, isErc1155 }: { sources: Array<any>; isErc1155: boolean }): Promise<string>;
  unPinFile({ hash }: { hash: string }): Promise<import('ipfs-http-client').CID>;
  closeConnection(): Promise<void>;
}
//# sourceMappingURL=ipfsService.d.ts.map