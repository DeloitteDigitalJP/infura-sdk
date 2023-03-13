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
var ownerAddress = process.env.WALLET_PUBLIC_ADDRESS;
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
describe('SDK - IPFS for ERC712', function () {
    jest.setTimeout(60 * 1000 * 10);
    var ipfsApiClient = new ipfsClient_1.default();
    it('Create folder and store 2 files openSeaTokenLevelStandard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, imageFile, tokenMetadata1, tokenMetadata2, tokenMetadata3, folderUri, folderHash, contractInfo, contract, mintHash1, receipt1, mintHash2, receipt2, mintHash3, receipt3, response, response2, contractNftMetadata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    imageFile = _a.sent();
                    tokenMetadata1 = {
                        description: 'Open see image',
                        external_url: 'https://uri',
                        image: imageFile,
                        name: 'Javivi',
                        attributes: [],
                    };
                    tokenMetadata2 = {
                        description: 'Open see image',
                        external_url: 'https://uri2',
                        image: imageFile,
                        name: 'Javivi',
                        attributes: [],
                    };
                    tokenMetadata3 = {
                        description: 'Open see image',
                        external_url: 'https://uri3',
                        image: imageFile,
                        name: 'Javivi',
                        attributes: [],
                    };
                    return [4 /*yield*/, sdk.createFolder({
                            metadata: [
                                Metadata_1.default.openSeaCollectionLevelStandard(tokenMetadata1),
                                Metadata_1.default.openSeaCollectionLevelStandard(tokenMetadata2),
                                Metadata_1.default.openSeaCollectionLevelStandard(tokenMetadata3),
                            ],
                            isErc1155: false,
                        })];
                case 2:
                    folderUri = _a.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(folderUri.replace('ipfs://', ''))];
                case 3:
                    folderHash = _a.sent();
                    expect(folderHash.status).toEqual(200);
                    expect(folderHash.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC721Mintable,
                        params: {
                            name: 'Contract for testing',
                            symbol: 'TOC',
                            contractURI: 'https://test.io',
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 4:
                    contract = _a.sent();
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/0"),
                        })];
                case 5:
                    mintHash1 = _a.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 6:
                    receipt1 = _a.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/1"),
                        })];
                case 7:
                    mintHash2 = _a.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 8:
                    receipt2 = _a.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/2"),
                        })];
                case 9:
                    mintHash3 = _a.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 10:
                    receipt3 = _a.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                case 11:
                    _a.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '0',
                        })];
                case 12:
                    response = _a.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '1',
                        })];
                case 13:
                    response2 = _a.sent();
                    expect(response.metadata).not.toBeNull();
                    expect(response2.metadata).not.toBeNull();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: contract.contractAddress,
                        })];
                case 14:
                    contractNftMetadata = _a.sent();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '0'; })[0].metadata).not.toBeNull();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '1'; })[0].metadata).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create folder and store 2 files openSeaCollectionLevelStandard', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, collectionLevelData1, collectionLevelData2, collectionLevelData3, folderUri, folderHash, contractInfo, contract, mintHash1, receipt1, mintHash2, receipt2, mintHash3, receipt3, mintHash4, receipt4, response, response2, contractNftMetadata;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _a = {
                        description: 'Open see image 1',
                        external_url: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    collectionLevelData1 = (_a.image = _d.sent(),
                        _a.name = 'Javivi',
                        _a.attributes = [],
                        _a);
                    _b = {
                        description: 'Open see image 2',
                        external_url: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 2:
                    collectionLevelData2 = (_b.image = _d.sent(),
                        _b.name = 'Javivi',
                        _b.attributes = [],
                        _b);
                    _c = {
                        description: 'Open see image 3',
                        external_url: 'https://testing'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 3:
                    collectionLevelData3 = (_c.image = _d.sent(),
                        _c.name = 'Javivi',
                        _c.attributes = [],
                        _c);
                    return [4 /*yield*/, sdk.createFolder({
                            metadata: [
                                Metadata_1.default.openSeaCollectionLevelStandard(collectionLevelData1),
                                Metadata_1.default.openSeaCollectionLevelStandard(collectionLevelData2),
                                Metadata_1.default.openSeaCollectionLevelStandard(collectionLevelData3),
                            ],
                            isErc1155: false,
                        })];
                case 4:
                    folderUri = _d.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(folderUri.replace('ipfs://', ''))];
                case 5:
                    folderHash = _d.sent();
                    expect(folderHash.status).toEqual(200);
                    expect(folderHash.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC721Mintable,
                        params: {
                            name: 'Contract for testing',
                            symbol: 'TOC',
                            contractURI: 'https://test.io',
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 6:
                    contract = _d.sent();
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "0"),
                        })];
                case 7:
                    mintHash1 = _d.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 8:
                    receipt1 = _d.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "1"),
                        })];
                case 9:
                    mintHash2 = _d.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 10:
                    receipt2 = _d.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "2"),
                        })];
                case 11:
                    mintHash3 = _d.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 12:
                    receipt3 = _d.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "3"),
                        })];
                case 13:
                    mintHash4 = _d.sent();
                    return [4 /*yield*/, mintHash4.wait()];
                case 14:
                    receipt4 = _d.sent();
                    expect(receipt4.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
                case 15:
                    _d.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '0',
                        })];
                case 16:
                    response = _d.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: contract.contractAddress,
                            tokenId: '1',
                        })];
                case 17:
                    response2 = _d.sent();
                    expect(response.metadata).not.toBeNull();
                    expect(response2.metadata).not.toBeNull();
                    return [4 /*yield*/, sdk.api.getNFTsForCollection({
                            contractAddress: contract.contractAddress,
                        })];
                case 18:
                    contractNftMetadata = _d.sent();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '1'; })[0].metadata).not.toBeNull();
                    expect(contractNftMetadata.assets.filter(function (asset) { return asset.tokenId === '0'; })[0].metadata).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create folder and store 3 files openSeaTokenLevelStandard', function () { return __awaiter(void 0, void 0, void 0, function () {
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
                            _m.isErc1155 = false,
                            _m)])];
                case 5:
                    folderUri = _s.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(folderUri.replace('ipfs://', ''))];
                case 6:
                    folderHash = _s.sent();
                    expect(folderHash.status).toEqual(200);
                    expect(folderHash.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC721Mintable,
                        params: {
                            name: 'Contract for testing',
                            symbol: 'TOC',
                            contractURI: 'https://test.io',
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 7:
                    contract = _s.sent();
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/0"),
                        })];
                case 8:
                    mintHash1 = _s.sent();
                    return [4 /*yield*/, mintHash1.wait()];
                case 9:
                    receipt1 = _s.sent();
                    expect(receipt1.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/1"),
                        })];
                case 10:
                    mintHash2 = _s.sent();
                    return [4 /*yield*/, mintHash2.wait()];
                case 11:
                    receipt2 = _s.sent();
                    expect(receipt2.status).toEqual(1);
                    return [4 /*yield*/, contract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: "".concat(folderUri, "/2"),
                        })];
                case 12:
                    mintHash3 = _s.sent();
                    return [4 /*yield*/, mintHash3.wait()];
                case 13:
                    receipt3 = _s.sent();
                    expect(receipt3.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
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
    it('storeMetadata and check ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var acc, sdk, metadata, fileStored, _a, _b, _c, _d, imageResponse, contractInfo, newContract, mintHash, receipt, resp;
        var _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    acc = new Auth_1.default(authInfo);
                    sdk = new sdk_1.SDK(acc);
                    _e = {
                        description: 'Friendly Open see image',
                        external_url: 'https://test'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 1:
                    metadata = (_e.image = _h.sent(),
                        _e.name = 'Javivi',
                        _e.attributes = [],
                        _e);
                    _b = (_a = sdk).storeMetadata;
                    _f = {};
                    _d = (_c = Metadata_1.default).openSeaTokenLevelStandard;
                    _g = {
                        description: 'Friendly Open see image',
                        external_url: 'https://test'
                    };
                    return [4 /*yield*/, sdk.storeFile({ metadata: file })];
                case 2: return [4 /*yield*/, _b.apply(_a, [(_f.metadata = _d.apply(_c, [(_g.image = _h.sent(),
                                _g.name = 'Javivi',
                                _g.attributes = [],
                                _g)]),
                            _f)])];
                case 3:
                    fileStored = _h.sent();
                    return [4 /*yield*/, ipfsApiClient.getIpfsImage(fileStored.replace('ipfs://', ''))];
                case 4:
                    imageResponse = _h.sent();
                    expect(imageResponse.status).toEqual(200);
                    expect(imageResponse.data).not.toBeNull();
                    contractInfo = {
                        template: constants_1.TEMPLATES.ERC721Mintable,
                        params: {
                            name: 'Contract for testing',
                            symbol: 'TOC',
                            contractURI: fileStored,
                        },
                    };
                    return [4 /*yield*/, sdk.deploy(contractInfo)];
                case 5:
                    newContract = _h.sent();
                    return [4 /*yield*/, newContract.mint({
                            publicAddress: ownerAddress,
                            tokenURI: fileStored,
                        })];
                case 6:
                    mintHash = _h.sent();
                    return [4 /*yield*/, mintHash.wait()];
                case 7:
                    receipt = _h.sent();
                    expect(receipt.status).toEqual(1);
                    return [4 /*yield*/, (0, utils_1.default)(function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sdk.api.getTokenMetadata({
                                            contractAddress: newContract.contractAddress,
                                            tokenId: '0',
                                        })];
                                    case 1:
                                        resp = _a.sent();
                                        return [2 /*return*/, resp.metadata !== null];
                                }
                            });
                        }); }, 120000, 1000, 'Waiting for NFT collection to be available for an user')];
                case 8:
                    _h.sent();
                    return [4 /*yield*/, sdk.api.getTokenMetadata({
                            contractAddress: newContract.contractAddress,
                            tokenId: '0',
                        })];
                case 9:
                    resp = _h.sent();
                    expect(resp.metadata).toEqual(metadata);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=sdk.ipfs.erc721.e2e.test.js.map