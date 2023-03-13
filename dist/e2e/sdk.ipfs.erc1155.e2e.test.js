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
var path_1 = __importDefault(require("path"));
var Auth_1 = __importDefault(require("../src/lib/Auth/Auth"));
var sdk_1 = require("../src/lib/SDK/sdk");
var constants_1 = require("../src/lib/constants");
var utils_1 = __importDefault(require("./utils/utils.ts/utils"));
var ipfsClient_1 = __importDefault(require("./utils/utils.ts/ipfsClient"));
var Metadata_1 = __importDefault(require("../src/lib/Metadata/Metadata"));
(0, dotenv_1.config)();
var ownerAddress = process.env.WALLET_PUBLIC_ADDRESS
    ? process.env.WALLET_PUBLIC_ADDRESS
    : '0x3bE0Ec232d2D9B3912dE6f1ff941CB499db4eCe7';
var ipfs = {
    projectId: process.env.INFURA_IPFS_PROJECT_ID,
    apiKeySecret: process.env.INFURA_IPFS_PROJECT_SECRET,
};
var authInfo = {
    privateKey: process.env.WALLET_PRIVATE_KEY,
    projectId: process.env.INFURA_PROJECT_ID,
    secretId: process.env.INFURA_PROJECT_SECRET,
    rpcUrl: process.env.EVM_RPC_URL,
    chainId: 80001,
    ipfs: ipfs,
};
var file = path_1.default.join(__dirname, 'infura.jpeg');
jest.retryTimes(2, { logErrorsBeforeRetry: true });
describe('SDK - IPFS for ERC1155', function () {
    jest.setTimeout(60 * 1000 * 10);
    var ipfsApiClient = new ipfsClient_1.default();
    it.skip('Deploy - Set URI for a contract and transfer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, contractInfo, newContract, folderUri, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, tx, txReceipt, mintHash, receipt, response;
        var _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC1155Mintable,
                        params: {
                            baseURI: 'https://testuri',
                            contractURI: 'https://testuri',
                            ids: [0, 1, 3, 4],
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 1:
                    newContract = _s.sent();
                    _b = (_a = sdk).createFolder;
                    _m = {};
                    _d = (_c = Metadata_1.default).openSeaCollectionLevelStandard;
                    _o = {
                        description: 'Open see image 1',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 2:
                    _e = [
                        _d.apply(_c, [(_o.image = _s.sent(),
                                _o.name = 'Javivi',
                                _o)])
                    ];
                    _g = (_f = Metadata_1.default).openSeaCollectionLevelStandard;
                    _p = {
                        description: 'Open see image 2',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 3:
                    _e = _e.concat([
                        _g.apply(_f, [(_p.image = _s.sent(),
                                _p.name = 'Javivi',
                                _p)])
                    ]);
                    _j = (_h = Metadata_1.default).openSeaCollectionLevelStandard;
                    _q = {
                        description: 'Open see image 3',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 4:
                    _e = _e.concat([
                        _j.apply(_h, [(_q.image = _s.sent(),
                                _q.name = 'Javivi',
                                _q)])
                    ]);
                    _l = (_k = Metadata_1.default).openSeaCollectionLevelStandard;
                    _r = {
                        description: 'Open see image 4',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 5: return [4 /*yield*/, _b.apply(_a, [(_m.metadata = _e.concat([
                            _l.apply(_k, [(_r.image = _s.sent(),
                                    _r.name = 'Javivi',
                                    _r)])
                        ]),
                            _m.isErc1155 = true,
                            _m)])];
                case 6:
                    folderUri = _s.sent();
                    return [4 /*yield*/, newContract.setBaseURI({ baseURI: folderUri })];
                case 7:
                    tx = _s.sent();
                    return [4 /*yield*/, tx.wait()];
                case 8:
                    txReceipt = _s.sent();
                    expect(txReceipt.status).toEqual(1);
                    return [4 /*yield*/, newContract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 3,
                        })];
                case 9:
                    mintHash = _s.sent();
                    return [4 /*yield*/, mintHash.wait()];
                case 10:
                    receipt = _s.sent();
                    expect(receipt.status).toEqual(1);
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
                        }); }, 300000, 1000, 'Waiting for NFT collection to be available')];
                case 11:
                    _s.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: newContract.contractAddress,
                            tokenId: '0',
                        })];
                case 12:
                    response = _s.sent();
                    expect(response.metadata).toContain(folderUri);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Store file with an string', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, fileStored, imageResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    fileStored = _a.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(fileStored.replace('ipfs://', ''))];
                case 2:
                    imageResponse = _a.sent();
                    expect(imageResponse.status).toEqual(200);
                    expect(imageResponse.data).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Store metadata as string', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, fileStored, imageResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.storeMetadata({ metadata: file })];
                case 1:
                    fileStored = _a.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(fileStored.replace('ipfs://', ''))];
                case 2:
                    imageResponse = _a.sent();
                    expect(imageResponse.status).toEqual(200);
                    expect(imageResponse.data).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Store metadata as OpenSeaTokenLevel standard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, tokenMetadata, fileStored, imageResponse;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _a = {
                        description: 'Open see image',
                        external_url: 'https://uri'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    tokenMetadata = (_a.image = _b.sent(),
                        _a.name = 'Javivi',
                        _a.attributes = [],
                        _a);
                    return [4 /*yield*/, sdk.storeMetadata({
                            metadata: Metadata_1.default.openSeaTokenLevelStandard(tokenMetadata),
                        })];
                case 2:
                    fileStored = _b.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(fileStored.replace('ipfs://', ''))];
                case 3:
                    imageResponse = _b.sent();
                    expect(imageResponse.status).toEqual(200);
                    expect(imageResponse.data).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Store metadata as OpenSeaCollectionLevel standard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, tokenMetadata, fileStored, imageResponse;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _a = {
                        description: 'Open see image',
                        external_url: 'https://uri'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    tokenMetadata = (_a.image = _b.sent(),
                        _a.name = 'Javivi',
                        _a.attributes = [],
                        _a);
                    return [4 /*yield*/, sdk.storeMetadata({
                            metadata: Metadata_1.default.openSeaCollectionLevelStandard(tokenMetadata),
                        })];
                case 2:
                    fileStored = _b.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(fileStored.replace('ipfs://', ''))];
                case 3:
                    imageResponse = _b.sent();
                    expect(imageResponse.status).toEqual(200);
                    expect(imageResponse.data).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create folder and store 2 files openSeaCollectionLevelStandard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, folderUri, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, folderHash, contractInfo, contract, mintHash1, receipt1, mintHash2, receipt2, mintHash3, receipt3, response, response2, contractNftMetadata;
        var _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _b = (_a = sdk).createFolder;
                    _m = {};
                    _d = (_c = Metadata_1.default).openSeaCollectionLevelStandard;
                    _o = {
                        description: 'Open see image 1',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    _e = [
                        _d.apply(_c, [(_o.image = _s.sent(),
                                _o.name = 'Javivi',
                                _o)])
                    ];
                    _g = (_f = Metadata_1.default).openSeaCollectionLevelStandard;
                    _p = {
                        description: 'Open see image 2',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 2:
                    _e = _e.concat([
                        _g.apply(_f, [(_p.image = _s.sent(),
                                _p.name = 'Javivi',
                                _p)])
                    ]);
                    _j = (_h = Metadata_1.default).openSeaCollectionLevelStandard;
                    _q = {
                        description: 'Open see image 3',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 3:
                    _e = _e.concat([
                        _j.apply(_h, [(_q.image = _s.sent(),
                                _q.name = 'Javivi',
                                _q)])
                    ]);
                    _l = (_k = Metadata_1.default).openSeaCollectionLevelStandard;
                    _r = {
                        description: 'Open see image 4',
                        external_link: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 4: return [4 /*yield*/, _b.apply(_a, [(_m.metadata = _e.concat([
                            _l.apply(_k, [(_r.image = _s.sent(),
                                    _r.name = 'Javivi',
                                    _r)])
                        ]),
                            _m.isErc1155 = true,
                            _m)])];
                case 5:
                    folderUri = _s.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(folderUri.replace('ipfs://', ''))];
                case 6:
                    folderHash = _s.sent();
                    expect(folderHash.status).toEqual(200);
                    expect(folderHash.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC1155Mintable,
                        params: {
                            baseURI: folderUri,
                            contractURI: folderUri,
                            ids: [0, 1, 3, 4],
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 7:
                    contract = _s.sent();
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 1,
                        })];
                case 8:
                    mintHash1 = _s.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 9:
                    receipt1 = _s.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 1,
                            quantity: 1,
                        })];
                case 10:
                    mintHash2 = _s.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 11:
                    receipt2 = _s.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 2,
                            quantity: 1,
                        })];
                case 12:
                    mintHash3 = _s.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 13:
                    receipt3 = _s.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var response, response2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getTokenMetadata({
                                            contractAddress: contract.contractAddress,
                                            tokenId: '0',
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        return [4 /*yield*/, sdk.api.getTokenMetadata({
                                                contractAddress: contract.contractAddress,
                                                tokenId: '1',
                                            })];
                                    case 2:
                                        response2 = _a.sent();
                                        return [2 /*return*/, response.metadata !== null && response2.metadata !== null];
                                }
                            });
                        }); }, 300000, 1000, 'Waiting for NFT collection to be available')];
                case 14:
                    _s.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '0',
                        })];
                case 15:
                    response = _s.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '1',
                        })];
                case 16:
                    response2 = _s.sent();
                    expect(response.metadata).not.toBeNull();
                    expect(response2.metadata).not.toBeNull();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: contract.contractAddress,
                        })];
                case 17:
                    contractNftMetadata = _s.sent();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '1'; })[0].metadata).not.toBeNull();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '0'; })[0].metadata).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create folder and store 2 files openSeaTokenLevelStandard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, folderUri, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, folderHash, contractInfo, contract, mintHash1, receipt1, mintHash2, receipt2, mintHash3, receipt3, response, response2, contractNftMetadata;
        var _m, _o, _p, _q, _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _b = (_a = sdk).createFolder;
                    _m = {};
                    _d = (_c = Metadata_1.default).openSeaTokenLevelStandard;
                    _o = {
                        description: 'Description 1',
                        external_url: 'https://url1'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    _e = [
                        _d.apply(_c, [(_o.image = _s.sent(),
                                _o.name = 'image1',
                                _o.attributes = [{ value: 1, trait_type: 'a' }],
                                _o)])
                    ];
                    _g = (_f = Metadata_1.default).openSeaTokenLevelStandard;
                    _p = {
                        description: 'Description 2',
                        external_url: 'https://url2'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 2:
                    _e = _e.concat([
                        _g.apply(_f, [(_p.image = _s.sent(),
                                _p.name = 'image2',
                                _p.attributes = [{ value: '2', trait_type: 'a' }],
                                _p)])
                    ]);
                    _j = (_h = Metadata_1.default).openSeaTokenLevelStandard;
                    _q = {
                        description: 'Description 3',
                        external_url: 'https://url1'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 3:
                    _e = _e.concat([
                        _j.apply(_h, [(_q.image = _s.sent(),
                                _q.name = 'image3',
                                _q.attributes = [{ value: 3, trait_type: 'a' }],
                                _q)])
                    ]);
                    _l = (_k = Metadata_1.default).openSeaTokenLevelStandard;
                    _r = {
                        description: 'Description 4',
                        external_url: 'https://url4'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 4: return [4 /*yield*/, _b.apply(_a, [(_m.metadata = _e.concat([
                            _l.apply(_k, [(_r.image = _s.sent(),
                                    _r.name = 'image3',
                                    _r.attributes = [{ value: '4', trait_type: 'a' }],
                                    _r)])
                        ]),
                            _m.isErc1155 = true,
                            _m)])];
                case 5:
                    folderUri = _s.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(folderUri.replace('ipfs://', ''))];
                case 6:
                    folderHash = _s.sent();
                    expect(folderHash.status).toEqual(200);
                    expect(folderHash.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC1155Mintable,
                        params: {
                            baseURI: folderUri,
                            contractURI: folderUri,
                            ids: [0, 1, 3, 4],
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 7:
                    contract = _s.sent();
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 0,
                            quantity: 2,
                        })];
                case 8:
                    mintHash1 = _s.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 9:
                    receipt1 = _s.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 1,
                            quantity: 1,
                        })];
                case 10:
                    mintHash2 = _s.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 11:
                    receipt2 = _s.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            to: ownerAddress,
                            id: 2,
                            quantity: 1,
                        })];
                case 12:
                    mintHash3 = _s.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 13:
                    receipt3 = _s.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            var nftCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getNFTsForCollection({
                                            contractAddress: contract.contractAddress,
                                        })];
                                    case 1:
                                        nftCollection = _a.sent();
                                        return [4 /*yield*/, sdk.api.getTokenMetadata({
                                                contractAddress: contract.contractAddress,
                                                tokenId: '0',
                                            })];
                                    case 2:
                                        response = _a.sent();
                                        return [4 /*yield*/, sdk.api.getTokenMetadata({
                                                contractAddress: contract.contractAddress,
                                                tokenId: '1',
                                            })];
                                    case 3:
                                        response2 = _a.sent();
                                        return [2 /*return*/, (nftCollection.total === 3 && response.metadata !== null && response2.metadata !== null)];
                                }
                            });
                        }); }, 300000, 1000, 'Waiting for NFT collection to be available')];
                case 14:
                    _s.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '0',
                        })];
                case 15:
                    response = _s.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '1',
                        })];
                case 16:
                    response2 = _s.sent();
                    expect(response.metadata).not.toBeNull();
                    expect(response2.metadata).not.toBeNull();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: contract.contractAddress,
                        })];
                case 17:
                    contractNftMetadata = _s.sent();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '1'; })[0].metadata).not.toBeNull();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '0'; })[0].metadata).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=sdk.ipfs.erc1155.e2e.test.js.map