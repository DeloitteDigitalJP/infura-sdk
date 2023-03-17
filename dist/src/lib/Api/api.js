"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var Logger_1 = require("../Logger");
var utils_1 = require("../utils");
var Api = /** @class */ (function () {
    function Api(apiPath, httpClient) {
        this.apiPath = apiPath;
        this.httpClient = httpClient;
    }
    /**
     * Get contract metadata by contract address
     * @param {object} opts object containing all parameters
     * @param {string} opts.contractAddress address of the contract
     * @returns {Promise<MetadataInfo>} Contract metadata object
     */
    Api.prototype.getContractMetadata = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, _a, symbol, name, tokenType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GETCONTRACTMETADATA,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress);
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        _a = (_b.sent()).data, symbol = _a.symbol, name = _a.name, tokenType = _a.tokenType;
                        return [2 /*return*/, { symbol: symbol, name: name, tokenType: tokenType }];
                }
            });
        });
    };
    /**
     * Get NFTs by an account address
     * @param {object} opts object containing all parameters
     * @param  {string} opts.address Account address
     * @param  {string} opts.includeMetadata flag to include the metadata object in the results
     * @returns {Promise<Array>} List of NFTs with metadata if 'includeMetadata' flag is true
     */
    Api.prototype.getNFTs = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.publicAddress || !ethers_1.utils.isAddress(opts.publicAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_public_address, {
                                location: Logger_1.Logger.location.SDK_GETNFTS,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/accounts/").concat(opts.publicAddress, "/assets/nfts");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!opts.includeMetadata) {
                            return [2 /*return*/, __assign(__assign({}, data), { assets: data.assets.map(function (asset) {
                                        var metadata = asset.metadata, rest = __rest(asset, ["metadata"]);
                                        return rest;
                                    }) })];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /** Get list of NFTs for the specified contract address
     * @param {object} opts object containing all parameters
     * @param {string} opts.contractAddress address of the contract to get the list of NFTs
     * @returns {Promise<object>} List of NFTs with metadata
     */
    Api.prototype.getNFTsForCollection = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GETNFTSFORCOLLECTION,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress, "/tokens");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /** Get a token metadata
     * @param {object} opts object containing all parameters
     * @param {string} opts.contractAddress address of the contract which holds the token
     * @param {string} opts.tokenId ID of the token
     * @returns {Promise<object>} Token metadata
     */
    Api.prototype.getTokenMetadata = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GETTOKENMETADATA,
                            });
                        }
                        if (!opts.tokenId) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_tokenId_supplied, {
                                location: Logger_1.Logger.location.SDK_GETTOKENMETADATA,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress, "/tokens/").concat(opts.tokenId);
                        return [4 /*yield*/, this.httpClient.get(apiUrl)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers by block number
     * @param {object} opts object containing all parameters
     * @param {string} opts.blockNumber number of the block to get transfers from
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getTransfersByBlockNumber = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.blockNumber) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_block_number, {
                                location: Logger_1.Logger.location.SDK_GETTRANSFERSBYBLOCKNUMBER,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/block/transfers");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, {
                                blockHashNumber: opts.blockNumber,
                                cursor: opts.cursor,
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers by block hash
     * @param {object} opts object containing all parameters
     * @param {string} opts.blockHash number of the block to get transfers from
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getTransfersByBlockHash = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.blockHash) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_block_hash, {
                                location: Logger_1.Logger.location.SDK_GETTRANSFERSBYBLOCKHASH,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/block/transfers");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, {
                                blockHashNumber: opts.blockHash,
                                cursor: opts.cursor,
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers by wallet address
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getNftsTransfersByWallet = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.walletAddress || !ethers_1.utils.isAddress(opts.walletAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_account_address, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_BY_WALLET,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/accounts/").concat(opts.walletAddress, "/assets/transfers");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers from block to block
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getTransferFromBlockToBlock = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, fromBlock, toBlock, cursor, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.fromBlock || !(0, utils_1.isValidPositiveNumber)(opts.fromBlock)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_block, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_FROM_BLOCK_TO_BLOCK,
                            });
                        }
                        if (!opts.toBlock || !(0, utils_1.isValidPositiveNumber)(opts.toBlock)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_block, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_FROM_BLOCK_TO_BLOCK,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/transfers");
                        fromBlock = opts.fromBlock, toBlock = opts.toBlock, cursor = opts.cursor;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { fromBlock: fromBlock, toBlock: toBlock, cursor: cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers by tokenId
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getTransfersByTokenId = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, contractAddress, tokenId, cursor, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_BY_TOKEN_ID,
                            });
                        }
                        if (!opts.tokenId) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_tokenId_supplied, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_BY_TOKEN_ID,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress, "/tokens/").concat(opts.tokenId, "/transfers");
                        contractAddress = opts.contractAddress, tokenId = opts.tokenId, cursor = opts.cursor;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { contractAddress: contractAddress, tokenId: tokenId, cursor: cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get transfers by contract address
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getTransfersByContractAddress = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, contractAddress, cursor, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GET_TRANSFERS_BY_CONTRACT,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress, "/transfers");
                        contractAddress = opts.contractAddress, cursor = opts.cursor;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { contractAddress: contractAddress, cursor: cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get lowest trade for a given token
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Trade information
     */
    Api.prototype.getLowestTradePrice = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, tokenAddress, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.tokenAddress || !ethers_1.utils.isAddress(opts.tokenAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_token_address, {
                                location: Logger_1.Logger.location.SDK_GET_LOWEST_TRADE_PRICE,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.tokenAddress, "/tradePrice");
                        tokenAddress = opts.tokenAddress;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { tokenAddress: tokenAddress })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get nft owners by contract address
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} OwnersDTO
     */
    Api.prototype.getOwnersbyContractAddress = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.contractAddress || !ethers_1.utils.isAddress(opts.contractAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.SDK_GET_OWNERS_BY_TOKEN_ADDRESS,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.contractAddress, "/owners");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Get nft owners by token address and token id
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} OwnersDTO
     */
    Api.prototype.getOwnersbyTokenAddressAndTokenId = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.tokenAddress || !ethers_1.utils.isAddress(opts.tokenAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_token_address, {
                                location: Logger_1.Logger.location.SDK_GET_OWNERS_BY_TOKEN_ADDRESS_AND_TOKEN_ID,
                            });
                        }
                        if (!opts.tokenId) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_tokenId_supplied, {
                                location: Logger_1.Logger.location.SDK_GET_OWNERS_BY_TOKEN_ADDRESS_AND_TOKEN_ID,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/").concat(opts.tokenAddress.toLowerCase(), "/").concat(opts.tokenId, "/owners");
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: opts.cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /* Get NFT collections owned by a given wallet address.
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Transfers list
     */
    Api.prototype.getCollectionsByWallet = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, cursor, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.walletAddress || !ethers_1.utils.isAddress(opts.walletAddress)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_account_address, {
                                location: Logger_1.Logger.location.SDK_GET_COLLECTION_BY_WALLET,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/accounts/").concat(opts.walletAddress, "/assets/collections");
                        cursor = opts.cursor;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { cursor: cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * search Nfts that match a specific query string
     * @param {object} opts object containing all parameters
     * @returns {Promise<object>} Nfts  list
     */
    Api.prototype.searchNfts = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUrl, cursor, query, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.query || opts.query.trim().length < 3) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_search_string, {
                                location: Logger_1.Logger.location.SDK_GET_SEARCH_NFT,
                            });
                        }
                        apiUrl = "".concat(this.apiPath, "/nfts/search");
                        cursor = opts.cursor, query = opts.query;
                        return [4 /*yield*/, this.httpClient.get(apiUrl, { query: query, cursor: cursor })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Api;
}());
exports.default = Api;
//# sourceMappingURL=api.js.map