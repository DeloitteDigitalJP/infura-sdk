import { ethers } from 'ethers';
import ERC721Mintable from '../ContractTemplates/ERC721Mintable';
export default class ContractFactory {
  static factory(
    template: string,
    signer: ethers.Wallet | ethers.providers.JsonRpcSigner,
  ): ERC721Mintable;
}
//# sourceMappingURL=contractFactory.d.ts.map