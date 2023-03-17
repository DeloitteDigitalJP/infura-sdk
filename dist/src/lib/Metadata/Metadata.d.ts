import { ContractLevelMetadata, OpenSeaTokenLevelStandard } from './types';
export default class Metadata {
  /**
   * Create token metadata
   * @param {string} name Name of the token
   * @param {string} description description of the token
   * @param {string} image link to the image URL
   * @param {Array} attributes The attributes of the token
   * @param {string} external_url The external link of the token
   * @param {string} animation_url Link to the animation such as music, video
   * @param {string} background_color The background color of the token
   * @param {string} youtube_url The youtube url of the token
   * @returns string
   */
  static openSeaTokenLevelStandard({
    name,
    description,
    image,
    attributes,
    external_url,
    animation_url,
    background_color,
    youtube_url,
  }: OpenSeaTokenLevelStandard): string;
  /**
   * Create contract metadata
   * @param {string} name Name of the contract
   * @param {string} description description of the contract
   * @param {string} image link to the image URL
   * @param {string} external_link The external link of the contract
   * @param {number} seller_fee_basis_points basis point for royalty
   * @param {number} fee_recipient free to for royalty recipient
   * @returns string
   */
  static openSeaCollectionLevelStandard({
    name,
    description,
    image,
    external_link,
    seller_fee_basis_points,
    fee_recipient,
  }: ContractLevelMetadata): string;
  /**
   * Create free metadata
   * @param {object} metadata object of free metadata
   * @returns string
   */
  static freeLevelMetadata(metadata: Object): string;
}
//# sourceMappingURL=Metadata.d.ts.map
