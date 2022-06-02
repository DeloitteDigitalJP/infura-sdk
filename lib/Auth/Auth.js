/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
import { ethers } from 'ethers';
import { availableChains, getChainName } from './availableChains.js';
import Signer from '../Signer/Signer.js';

export default class Auth {
  #privateKey;

  #projectId;

  #secretId;

  #rpcUrl;

  #provider;

  #chainId;

  constructor({ privateKey, projectId, secretId, rpcUrl, chainId }) {
    if (!privateKey) throw new Error('[Auth.constructor] privateKey is missing!');
    if (!projectId) throw new Error('[Auth.constructor] projectId is missing!');
    if (!secretId) throw new Error('[Auth.constructor] secretId is missing!');
    if (!chainId) throw new Error('[Auth.constructor] chainId is missing!');
    if (!availableChains.includes(chainId)) {
      throw new Error(`[Auth.constructor] chainId: ${chainId} is not supported!`);
    }

    this.#rpcUrl = rpcUrl;

    if (!this.#rpcUrl) {
      this.#rpcUrl = `https://${getChainName(chainId)}.infura.io/v3/${this.#projectId}`;
    }

    this.#privateKey = privateKey;
    this.#projectId = projectId;
    this.#secretId = secretId;
    this.#chainId = chainId;
    // eslint-disable-next-line new-cap
    this.#provider = new ethers.providers.getDefaultProvider(this.#rpcUrl);
  }

  getChainId() {
    return this.#chainId;
  }

  getApiAuthHeader() {
    return {
      Authorization: `Basic ${this.#base64encode(this.#projectId, this.#secretId)}`,
    };
  }

  #base64encode() {
    return Buffer.from(`${this.#projectId}:${this.#secretId}`).toString('base64');
  }

  getApiAuth() {
    return this.#base64encode();
  }

  getSigner() {
    return Signer.getWallet(this.#privateKey, this.#provider);
  }

  getProvider() {
    return this.#provider;
  }

  setInjectedProvider(injectedProvider) {
    if (!injectedProvider) {
      throw new Error(
        '[Auth.setInjectedProvider] You need to pass an injected provider to this function!',
      );
    }

    this.#provider = new ethers.providers.Web3Provider(injectedProvider);
    return this.#provider;
  }
}