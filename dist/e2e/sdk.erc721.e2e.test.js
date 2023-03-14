"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var Auth_1 = __importDefault(require("../src/lib/Auth/Auth"));
var sdk_1 = require("../src/lib/SDK/sdk");
var constants_1 = require("../src/lib/constants");
var utils_1 = __importStar(require("./utils/utils.ts/utils"));
(0, dotenv_1.config)();
var ownerAddress = process.env.WALLET_PUBLIC_ADDRESS
    ? process.env.WALLET_PUBLIC_ADDRESS
    : '0x3bE0Ec232d2D9B3912dE6f1ff941CB499db4eCe7';
var tokenURI = 'https://';
var authInfo = {
    privateKey: process.env.WALLET_PRIVATE_KEY,
    projectId: process.env.INFURA_PROJECT_ID,
    secretId: process.env.INFURA_PROJECT_SECRET,
    rpcUrl: process.env.EVM_RPC_URL,
    chainId: 80001,
};
var contractInfo = {
    template: constants_1.TEMPLATES.ERC721Mintable,
    params: {
        name: 'Contract for testing',
        symbol: 'TOC',
        contractURI: 'https://test.io',
    },
};
jest.retryTimes(2, { logErrorsBeforeRetry: true });
describe('SDK - contract interaction (deploy, load and mint)', function () {
    jest.setTimeout(60 * 1000 * 5);
    it('Deploy - Get all nfts by owner address', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, response, newContract, mintHash, receipt, response2, responseGetCollectionByWallet, response3, createdToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.api.getNFTs({
                            publicAddress: ownerAddress,
                            includeMetadata: false,
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 2:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: 'https://ipfs.io/ipfs/QmRfModHffFedTkHSW1ZEn8f19MdPztn9WV3kY1yjaKvBy',
                        })];
                case 3:
                    mintHash = _a.sent();
                    return [4 /*yield*/, mintHash.wait()];
                case 4:
                    receipt = _a.sent();
                    expect(receipt.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var resp, newContractCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: false })];
                                    case 1:
                                        resp = _a.sent();
                                        return [4 /*yield*/, resp.assets.filter(function (asset) { return asset.contract.toLowerCase() === newContract.contractAddress.toLowerCase(); })[0]];
                                    case 2:
                                        newContractCollection = _a.sent();
                                        return [2 /*return*/, (resp.total > response.total &&
                                                newContractCollection !== null &&
                                                newContractCollection.metadata !== null)];
                                }
                            });
                        }); }, 120000, 1000, 'Waiting for NFT collection to be available for an user')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getNFTs({
                            publicAddress: ownerAddress,
                            includeMetadata: false,
                        })];
                case 6:
                    response2 = _a.sent();
                    expect(response2.total).toBeGreaterThan(response.total);
                    expect(response2.assets[0].metadata).toEqual(undefined);
                    return [4 /*yield*/, sdk.api.getCollectionsByWallet({
                            walletAddress: '0x3bE0Ec232d2D9B3912dE6f1ff941CB499db4eCe7',
                        })];
                case 7:
                    responseGetCollectionByWallet = _a.sent();
                    expect(responseGetCollectionByWallet.collections).not.toBeNull();
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var nfts, token;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: true })];
                                    case 1:
                                        nfts = _a.sent();
                                        return [4 /*yield*/, nfts.assets.filter(function (asset) { return asset.contract.toLowerCase() === newContract.contractAddress.toLowerCase(); })];
                                    case 2:
                                        token = _a.sent();
                                        return [2 /*return*/, token[0].metadata !== null];
                                }
                            });
                        }); })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: true })];
                case 9:
                    response3 = _a.sent();
                    return [4 /*yield*/, response3.assets.filter(function (asset) { return asset.contract.toLowerCase() === newContract.contractAddress.toLowerCase(); })];
                case 10:
                    createdToken = _a.sent();
                    expect(createdToken[0].metadata).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Deploy - Get all nfts from a collection', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, contract, mintHash1, receipt1, mintHash2, receipt2, mintHash3, receipt3, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    contract = _a.sent();
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: tokenURI,
                        })];
                case 2:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: tokenURI,
                        })];
                case 4:
                    mintHash2 = _a.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 5:
                    receipt2 = _a.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: tokenURI,
                        })];
                case 6:
                    mintHash3 = _a.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 7:
                    receipt3 = _a.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTsForCollection({
                                            contractAddress: contract.contractAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response.total === 3];
                                }
                            });
                        }); }, 600000, 1000, 'Waiting for NFT collection to be available')];
                case 8:
                    _a.sent();
                    if (response) {
                        response.assets.forEach(function (asset) {
                            expect(asset.contract.toLowerCase()).toEqual(contract.contractAddress.toLowerCase());
                            expect(asset.type).toEqual('ERC721');
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    it('Deploy - Get all collection metadata', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, contract, mintHash1, receipt1, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    contract = _a.sent();
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: tokenURI,
                        })];
                case 2:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getContractMetadata({ contractAddress: contract.contractAddress })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response !== null];
                                }
                            });
                        }); }, 120000, 1000, 'Waiting for NFT collection metadata to be available')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getContractMetadata({ contractAddress: contract.contractAddress })];
                case 5:
                    response = _a.sent();
                    expect(response.name).toEqual(contractInfo.params.name);
                    expect(response.symbol).toEqual(contractInfo.params.symbol);
                    expect(response.tokenType).toEqual('ERC721');
                    return [2 /*return*/];
            }
        });
    }); }, 240000);
    it('Deploy - Get NFT metadata', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, newContract, mintHash1, receipt1, metadataResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: 'https://ipfs.io/ipfs/QmRfModHffFedTkHSW1ZEn8f19MdPztn9WV3kY1yjaKvBy',
                        })];
                case 2:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getTokenMetadata({
                                            contractAddress: newContract.contractAddress,
                                            tokenId: '0',
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response.metadata !== null];
                                }
                            });
                        }); }, 600000, 1000, 'Waiting for NFT metadata to be available')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: newContract.contractAddress,
                            tokenId: '0',
                        })];
                case 5:
                    metadataResponse = _a.sent();
                    expect(metadataResponse.contract.toLowerCase()).toEqual(newContract.contractAddress.toLowerCase());
                    expect(metadataResponse.metadata.name).toEqual('Astro Soccer');
                    expect(metadataResponse.metadata.description).toEqual("The world's most adorable and sensitive pup.");
                    expect(metadataResponse.metadata.image).toContain('https://ipfs.io/ipfs/');
                    expect(metadataResponse.metadata.attributes).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); }, 600000);
    it('Load existing contract', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, newContract, loadedContract;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _a.sent();
                    return [4 /*yield*/, sdk.loadContract({
                            template: constants_1.TEMPLATES.ERC721Mintable,
                            contractAddress: newContract.contractAddress,
                        })];
                case 2:
                    loadedContract = _a.sent();
                    expect(loadedContract.contractAddress).toEqual(newContract.contractAddress);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Load old contract', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, cont, contract;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    cont = {
                        template: constants_1.TEMPLATES.ERC721Mintable,
                        contractAddress: utils_1.existingContractAddress,
                    };
                    return [4 /*yield*/, sdk.loadContract(cont)];
                case 1:
                    contract = _a.sent();
                    expect(contract.contractAddress).toEqual(cont.contractAddress);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Load new contract and get Metadata', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, newContract, mintHash1, receipt1, meta, result, result2, resultSearch, match;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: 'https://ipfs.io/ipfs/QmRfModHffFedTkHSW1ZEn8f19MdPztn9WV3kY1yjaKvBy',
                        })];
                case 2:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getContractMetadata({
                                            contractAddress: newContract.contractAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response !== null];
                                }
                            });
                        }); }, 300000, 1000, 'Waiting for NFT metadata to be available')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getContractMetadata({
                            contractAddress: newContract.contractAddress,
                        })];
                case 5:
                    meta = _a.sent();
                    expect(meta.symbol).toEqual(contractInfo.params.symbol);
                    expect(meta.name).toEqual(contractInfo.params.name);
                    expect(meta.tokenType).toEqual('ERC721');
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getOwnersbyContractAddress({
                                            contractAddress: newContract.contractAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, (response.owners.length !== 0 &&
                                                response.owners[0].metadata !== null &&
                                                response.owners[0].minterAddress !== null)];
                                }
                            });
                        }); }, 300000, 1000, 'Waiting for owners to be updated')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getOwnersbyContractAddress({
                            contractAddress: newContract.contractAddress,
                        })];
                case 7:
                    result = _a.sent();
                    expect(result).toMatchObject({
                        total: expect.any(Number),
                        pageNumber: expect.any(Number),
                        pageSize: expect.any(Number),
                        network: expect.any(String),
                        owners: [
                            {
                                tokenAddress: newContract.contractAddress.toLowerCase(),
                                tokenId: expect.any(String),
                                amount: '1',
                                ownerOf: ownerAddress.toLowerCase(),
                                tokenHash: expect.any(String),
                                blockNumberMinted: expect.any(String),
                                blockNumber: expect.any(String),
                                contractType: expect.any(String),
                                name: contractInfo.params.name,
                                symbol: contractInfo.params.symbol,
                                metadata: expect.any(String),
                                minterAddress: expect.any(String),
                            },
                        ],
                    });
                    return [4 /*yield*/, sdk.api.getOwnersbyTokenAddressAndTokenId({
                            tokenAddress: newContract.contractAddress,
                            tokenId: '0',
                        })];
                case 8:
                    result2 = _a.sent();
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getOwnersbyTokenAddressAndTokenId({
                                            tokenAddress: newContract.contractAddress,
                                            tokenId: '0',
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, (response.owners.length !== 0 &&
                                                response.owners[0].metadata !== null &&
                                                response.owners[0].metadata !== null)];
                                }
                            });
                        }); }, 300000, 1000, 'Waiting for owners to be updated')];
                case 9:
                    _a.sent();
                    expect(result2).toMatchObject({
                        total: expect.any(Number),
                        pageNumber: expect.any(Number),
                        pageSize: expect.any(Number),
                        network: expect.any(String),
                        owners: expect.arrayContaining([
                            expect.objectContaining({
                                tokenAddress: newContract.contractAddress.toLowerCase(),
                                tokenId: expect.any(String),
                                amount: '1',
                                ownerOf: ownerAddress.toLowerCase(),
                                tokenHash: expect.any(String),
                                blockNumber: expect.any(String),
                                blockNumberMinted: expect.any(String),
                                contractType: expect.any(String),
                                name: contractInfo.params.name,
                                symbol: contractInfo.params.symbol,
                                metadata: expect.any(String),
                                minterAddress: expect.any(String),
                            }),
                        ]),
                    });
                    return [4 /*yield*/, sdk.api.searchNfts({
                            query: contractInfo.params.name,
                        })];
                case 10:
                    resultSearch = _a.sent();
                    match = resultSearch.nfts.some(function (element) { return element.metadata.includes('test'); });
                    expect(match).toBeTruthy();
                    expect(resultSearch).toMatchObject({
                        total: expect.any(Number),
                        pageNumber: expect.any(Number),
                        pageSize: expect.any(Number),
                        network: expect.any(String),
                        nfts: expect.arrayContaining([
                            expect.objectContaining({
                                tokenId: expect.any(String),
                                tokenAddress: expect.any(String),
                                metadata: expect.any(String),
                                contractType: expect.any(String),
                                tokenHash: expect.any(String),
                                minterAddress: expect.any(String),
                                blockNumberMinted: expect.any(String),
                                createdAt: expect.any(String),
                            }),
                        ]),
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=sdk.erc721.e2e.test.js.map