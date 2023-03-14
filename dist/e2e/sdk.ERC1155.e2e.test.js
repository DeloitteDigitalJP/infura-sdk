"use strict";
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
var utils_1 = __importDefault(require("./utils/utils.ts/utils"));
(0, dotenv_1.config)();
var reusableContract;
var ownerAddress = process.env.WALLET_PUBLIC_ADDRESS;
var authInfo = {
    privateKey: process.env.WALLET_PRIVATE_KEY,
    projectId: process.env.INFURA_PROJECT_ID,
    secretId: process.env.INFURA_PROJECT_SECRET,
    rpcUrl: process.env.EVM_RPC_URL,
    chainId: 80001,
};
var contractInfo = {
    template: constants_1.TEMPLATES.ERC1155Mintable,
    params: {
        baseURI: 'https://test.io',
        contractURI: 'https://test.io',
        ids: [],
    },
};
jest.retryTimes(2, { logErrorsBeforeRetry: true });
describe('SDK - ERC1155 - contract interaction (deploy, load and mint)', function () {
    jest.setTimeout(60 * 1000 * 10);
    it('Deploy - Get all nfts by owner address', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, response, newContract, mintHash, receipt, response2, response3, createdToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: false })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 2:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 3,
                        })];
                case 3:
                    mintHash = _a.sent();
                    return [4 /*yield*/, mintHash.wait()];
                case 4:
                    receipt = _a.sent();
                    expect(receipt.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var resp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: false })];
                                    case 1:
                                        resp = _a.sent();
                                        return [2 /*return*/, resp.total > response.total];
                                }
                            });
                        }); }, 120000, 1000, 'Waiting for new nft to be available')];
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
                    return [4 /*yield*/, sdk.api.getNFTs({ publicAddress: ownerAddress, includeMetadata: true })];
                case 7:
                    response3 = _a.sent();
                    return [4 /*yield*/, response3.assets.filter(function (asset) { return asset.contract.toLowerCase() === newContract.contractAddress.toLowerCase(); })];
                case 8:
                    createdToken = _a.sent();
                    expect(createdToken.metadata).not.toBeNull();
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
                            to: ownerAddress,
                            id: 0,
                            quantity: 3,
                        })];
                case 2:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 2,
                            quantity: 3,
                        })];
                case 4:
                    mintHash2 = _a.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 5:
                    receipt2 = _a.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 3,
                            quantity: 3,
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
                        }); }, 600000, 1000, 'Waiting for NFT collection to be available from api')];
                case 8:
                    _a.sent();
                    response.assets.forEach(function (asset) {
                        expect(asset.contract.toLowerCase()).toEqual(contract.contractAddress.toLowerCase());
                        expect(asset.type).toEqual('ERC1155');
                        expect(asset.supply).toEqual('3');
                    });
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
                            to: ownerAddress,
                            id: 0,
                            quantity: 3,
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
                        }); }, 120000, 1000, 'Waiting for NFT collection to be available')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getContractMetadata({
                            contractAddress: contract.contractAddress,
                        })];
                case 5: return [4 /*yield*/, _a.sent()];
                case 6:
                    response = _a.sent();
                    expect(response.name).toEqual(null);
                    expect(response.symbol).toEqual(null);
                    expect(response.tokenType).toEqual('ERC1155');
                    return [2 /*return*/];
            }
        });
    }); }, 240000);
    it('Mint batch', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, newContract, mintHash1, receipt1, response, token0, token1, token2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mintBatch({
                            to: ownerAddress,
                            ids: [0, 1, 2],
                            quantities: [1, 2, 3],
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
                                    case 0: return [4 /*yield*/, sdk.api.getNFTsForCollection({
                                            contractAddress: newContract.contractAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response.total === 3 && response.assets.length === 3];
                                }
                            });
                        }); }, 90000, 1000, 'Waiting for NFT collection to be available')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: newContract.contractAddress,
                        })];
                case 5:
                    response = _a.sent();
                    expect(response.assets.length).toEqual(3);
                    token0 = response.assets.filter(function (ele) { return ele.tokenId === '0'; })[0];
                    expect(token0.contract.toLowerCase()).toEqual(newContract.contractAddress.toLowerCase());
                    expect(token0.tokenId).toEqual('0');
                    expect(token0.supply).toEqual('1');
                    expect(token0.type).toEqual('ERC1155');
                    token1 = response.assets.filter(function (ele) { return ele.tokenId === '1'; })[0];
                    expect(token1.contract.toLowerCase()).toEqual(newContract.contractAddress.toLowerCase());
                    expect(token1.tokenId).toEqual('1');
                    expect(token1.supply).toEqual('2');
                    expect(token1.type).toEqual('ERC1155');
                    token2 = response.assets.filter(function (ele) { return ele.tokenId === '2'; })[0];
                    expect(token2.contract.toLowerCase()).toEqual(newContract.contractAddress.toLowerCase());
                    expect(token2.tokenId).toEqual('2');
                    expect(token2.supply).toEqual('3');
                    expect(token2.type).toEqual('ERC1155');
                    return [2 /*return*/];
            }
        });
    }); }, 240000);
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
                            template: constants_1.TEMPLATES.ERC1155Mintable,
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
                        template: constants_1.TEMPLATES.ERC1155Mintable,
                        contractAddress: '0x9F2001302362c94DEaE3a08295a6a957f271F470',
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
        var acc, sdk, newContract, mintHash1, receipt1, meta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _a.sent();
                    return [4 /*yield*/, newContract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 1,
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
                    expect(meta.tokenType).toEqual('ERC1155');
                    return [2 /*return*/];
            }
        });
    }); });
    it('deploy a contract and addIds', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, hash, receipt1, mintHash, collection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    reusableContract = _a.sent();
                    return [4 /*yield*/, reusableContract.addIds({ ids: [0] })];
                case 2:
                    hash = _a.sent();
                    return [4 /*yield*/, hash.wait()];
                case 3:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, reusableContract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 1,
                        })];
                case 4:
                    mintHash = _a.sent();
                    return [4 /*yield*/, mintHash.wait()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTsForCollection({
                                            contractAddress: reusableContract.contractAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response.total === 1];
                                }
                            });
                        }); }, 90000, 1000, 'Waiting for NFT collection to be available')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: reusableContract.contractAddress,
                        })];
                case 7:
                    collection = _a.sent();
                    expect(collection.total).toEqual(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Get transfers by wallet and by blocknumber after transfering a token', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, transferList, cont, contract, txHash, transferList2, transfer, transferList3, transferList4, transferList5, transferList6, transferList7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.api.getNftsTransfersByWallet({ walletAddress: ownerAddress })];
                case 1:
                    transferList = _a.sent();
                    cont = {
                        template: constants_1.TEMPLATES.ERC1155Mintable,
                        contractAddress: reusableContract.contractAddress,
                    };
                    return [4 /*yield*/, sdk.loadContract(cont)];
                case 2:
                    contract = _a.sent();
                    return [4 /*yield*/, contract.transfer({
                            from: ownerAddress,
                            to: '0x4aad99513ef287991735e13424189cc9b0fcf82e',
                            tokenId: 0,
                            quantity: 1,
                        })];
                case 3:
                    txHash = _a.sent();
                    return [4 /*yield*/, txHash.wait()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNftsTransfersByWallet({
                                            walletAddress: ownerAddress,
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [2 /*return*/, response.total > transferList.total];
                                }
                            });
                        }); }, 90000, 1000, 'Waiting for NFT transfer to be available')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getNftsTransfersByWallet({ walletAddress: ownerAddress })];
                case 6:
                    transferList2 = _a.sent();
                    expect(transferList2.total).toBeGreaterThan(transferList.total); // check the new transfer is returned
                    transfer = transferList2.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; });
                    return [4 /*yield*/, sdk.api.getTransfersByBlockNumber({
                            blockNumber: transfer[0].blockNumber,
                        })];
                case 7:
                    transferList3 = _a.sent();
                    expect(transferList3.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; })[0]).toEqual(transfer[0]); // check that the transfer is returned and equal in both endpoints
                    return [4 /*yield*/, sdk.api.getTransfersByBlockHash({
                            blockHash: transfer[0].blockHash,
                        })];
                case 8:
                    transferList4 = _a.sent();
                    expect(transferList4.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; })[0]).toEqual(transfer[0]);
                    return [4 /*yield*/, sdk.api.getTransferFromBlockToBlock({
                            fromBlock: parseInt(transfer[0].blockNumber, 10),
                            toBlock: parseInt(transfer[0].blockNumber, 10),
                        })];
                case 9:
                    transferList5 = _a.sent();
                    expect(transferList5.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; })[0]).toEqual(transfer[0]);
                    return [4 /*yield*/, sdk.api.getTransfersByTokenId({
                            contractAddress: reusableContract.contractAddress,
                            tokenId: '0',
                        })];
                case 10:
                    transferList6 = _a.sent();
                    expect(transferList6.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; })[0]).toEqual(transfer[0]);
                    return [4 /*yield*/, sdk.api.getTransfersByContractAddress({
                            contractAddress: reusableContract.contractAddress,
                        })];
                case 11:
                    transferList7 = _a.sent();
                    expect(transferList7.transfers.filter(function (tx) { return tx.transactionHash === txHash.hash; })[0]).toEqual(transfer[0]);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=sdk.ERC1155.e2e.test.js.map