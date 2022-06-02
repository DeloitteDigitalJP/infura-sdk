import { config as loadEnv } from 'dotenv';
import ganache from 'ganache';
import Auth from '../lib/Auth/Auth';
import SDK from '../lib/SDK/sdk';
import { TEMPLATES } from '../lib/NFT/constants';

loadEnv();
let sdk;
let account;
let server;
let contractObject;
let publicAddress;
let owner;
let privateKeyPublicAddress;

describe('E2E Test: Basic NFT (write)', () => {
  jest.setTimeout(120 * 1000);

  beforeAll(async () => {
    const options = {
      wallet: {
        accountKeysPath: 'integration-test/keys.json',
      },
    };

    server = ganache.server(options);
    await server.listen(8545);

    // grab the first account
    // eslint-disable-next-line global-require
    const { addresses: addr, private_keys: pk } = require('./keys.json');
    [owner, publicAddress] = Object.keys(addr);
    const privateKey = pk[owner];
    privateKeyPublicAddress = pk[publicAddress];

    const rpcUrl = 'http://0.0.0.0:8545';
    const chainId = 5;
    const projectId = process.env.INFURA_PROJECT_ID;
    const secretId = process.env.INFURA_PROJECT_SECRET;
    const IPFS = { IPFSProjectID: '', IPFSProjectSecret: '' };

    account = new Auth({
      privateKey,
      projectId,
      secretId,
      rpcUrl,
      chainId,
      IPFS,
    });

    sdk = new SDK(account);
    contractObject = await sdk.deploy({
      template: TEMPLATES.ERC721Mintable,
      params: {
        name: 'Cool Contract',
        symbol: 'CC',
        contractURI: 'URI',
      },
    });
  });

  afterAll(async () => {
    await server.close();
  });

  it('should return deployed contract', async () => {
    expect(contractObject.contractAddress).not.toBe(null);
  });

  it('should return loaded contract', async () => {
    const loadedContract = await sdk.loadContract({
      template: TEMPLATES.ERC721Mintable,
      contractAddress: contractObject.contractAddress,
    });

    expect(loadedContract).not.toBe(null);
  });

  it('should mint nft', async () => {
    const tx = await contractObject.mint(
      owner,
      'https://ipfs.io/ipfs/QmRfModHffFedTkHSW1ZEn8f19MdPztn9WV3kY1yjaKvBy',
    );

    const receipt = await tx.wait();

    expect(receipt.status).toEqual(1);
  });

  it('should transfer nft', async () => {
    const tx = await contractObject.transfer({
      from: owner,
      to: publicAddress,
      tokenId: 0,
    });
    const receipt = await tx.wait();

    expect(receipt.status).toEqual(1);
  });

  it('should set contract URI', async () => {
    const tx = await contractObject.setContractURI(
      'https://www.cryptotimes.io/wp-content/uploads/2022/03/BAYC-835-Website-800x500.jpg',
    );
    const receipt = await tx.wait();
    expect(receipt.status).toEqual(1);
  });

  it('should Grant & check Minter role', async () => {
    // grant minter role
    const tx = await contractObject.addMinter(publicAddress);
    const receipt = await tx.wait();

    // // check minter role
    const isMinter = await contractObject.isMinter(publicAddress);

    expect(receipt.status).toEqual(1);
    expect(isMinter).toEqual(true);
  });

  it('should Grant & revoke & check Minter role', async () => {
    // grant minter role
    const tx = await contractObject.addMinter(publicAddress);
    const receipt = await tx.wait();

    // revoke minter role
    const tx2 = await contractObject.removeMinter(publicAddress);
    const receipt2 = await tx2.wait();

    // // check minter role
    const isMinter = await contractObject.isMinter(publicAddress);

    expect(receipt.status).toEqual(1);
    expect(receipt2.status).toEqual(1);
    expect(isMinter).toEqual(false);
  });

  it('should Grant & renounce & check Minter role', async () => {
    // grant minter role
    const tx = await contractObject.addMinter(publicAddress);
    const receipt = await tx.wait();

    // renounce minter role
    const accountPublic = new Auth({
      privateKey: privateKeyPublicAddress,
      projectId: process.env.INFURA_PROJECT_ID,
      secretId: process.env.INFURA_PROJECT_SECRET,
      rpcUrl: 'http://0.0.0.0:8545',
      chainId: 5,
    });

    const sdkPublic = new SDK(accountPublic);
    const existing = await sdkPublic.loadContract({
      template: TEMPLATES.ERC721Mintable,
      contractAddress: contractObject.contractAddress,
    });

    const tx2 = await existing.renounceMinter(publicAddress);
    const receipt2 = await tx2.wait();

    // // check minter role
    const isMinter = await contractObject.isMinter(publicAddress);

    expect(receipt.status).toEqual(1);
    expect(receipt2.status).toEqual(1);
    expect(isMinter).toEqual(false);
  });

  it('should set approval for all', async () => {
    const loadedContractObject = await sdk.loadContract({
      template: TEMPLATES.ERC721Mintable,
      contractAddress: contractObject.contractAddress,
    });
    const tx = await loadedContractObject.setApprovalForAll(publicAddress, true);
    const receipt = await tx.wait();

    expect(receipt.status).toEqual(1);
  });
});