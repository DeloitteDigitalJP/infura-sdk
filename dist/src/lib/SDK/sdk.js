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
exports.SDK = exports.classes = void 0;
var ethers_1 = require("ethers");
var Auth_1 = __importDefault(require("../Auth/Auth"));
var httpService_1 = __importDefault(require("../../services/httpService"));
var constants_1 = require("../constants");
var ERC721Mintable_1 = __importDefault(require("../ContractTemplates/ERC721Mintable"));
var ERC721UserMintable_1 = __importDefault(require("../ContractTemplates/ERC721UserMintable"));
var Logger_1 = require("../Logger");
var sdk_schema_1 = require("./sdk.schema");
var utils_1 = require("../utils");
var ERC1155Mintable_1 = __importDefault(require("../ContractTemplates/ERC1155Mintable"));
var api_1 = __importDefault(require("../Api/api"));
var availableChains_1 = require("../Auth/availableChains");
exports.classes = {
    ERC721Mintable: ERC721Mintable_1.default,
    ERC721UserMintable: ERC721UserMintable_1.default,
    ERC1155Mintable: ERC1155Mintable_1.default,
};
var SDK = /** @class */ (function () {
    function SDK(auth) {
        if (!(auth instanceof Auth_1.default)) {
            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_auth_instance, 'auth', auth, {
                location: Logger_1.Logger.location.SDK_CONSTRUCTOR,
            });
        }
        this.auth = auth;
        var apiPath = "/networks/".concat(this.auth.getChainId());
        var httpClient = new httpService_1.default(constants_1.NFT_API_URL, this.auth.getApiAuth());
        this.api = new api_1.default(apiPath, httpClient);
        this.ipfsClient = this.auth.getIpfsClient();
    }
    /** Get provider
     * @returns {ethers.Wallet | ethers.providers.JsonRpcProvider} return the provider
     */
    SDK.prototype.getProvider = function () {
        return this.auth.getSigner();
    };
    SDK.prototype.infuraSupported = function () {
        return (this.auth.getChainId() !== availableChains_1.Chains.bsc &&
            this.auth.getChainId() !== availableChains_1.Chains.bsctest &&
            this.auth.getChainId() !== availableChains_1.Chains.cronos &&
            this.auth.getChainId() !== availableChains_1.Chains.cronostestnet &&
            this.auth.getChainId() !== availableChains_1.Chains.fantom);
    };
    SDK.prototype.deploy = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var signer, contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.infuraSupported()) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.chain_not_supported_write_operations, 'chainId', this.auth.getChainId(), {
                                location: Logger_1.Logger.location.SDK_DEPLOY,
                            });
                        }
                        if (!opts.template) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_template_type_supplied, {
                                location: Logger_1.Logger.location.SDK_DEPLOY,
                            });
                        }
                        if (Object.keys(opts.params).length === 0) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_parameters_supplied, {
                                location: Logger_1.Logger.location.SDK_DEPLOY,
                            });
                        }
                        signer = this.auth.getSigner();
                        contract = new exports.classes[opts.template](signer);
                        return [4 /*yield*/, contract.deploy(opts.params)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    /**
     * Load a contract from an existing contract address and a template
     * @param {object} opts object containing all parameters
     * @param {string} opts.template name of the template to use (ERC721Mintable, ...)
     * @param {string} opts.contractAddress address of the contract to load
     * @returns {Promise<any>} Contract instance
     */
    SDK.prototype.loadContract = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var signer, contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.infuraSupported()) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.chain_not_supported_write_operations, 'chainId', this.auth.getChainId(), {
                                location: Logger_1.Logger.location.SDK_LOADCONTRACT,
                            });
                        }
                        if (!opts.template) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_template_type_supplied, {
                                location: Logger_1.Logger.location.SDK_LOADCONTRACT,
                            });
                        }
                        if (!opts.contractAddress) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_address_supplied, {
                                location: Logger_1.Logger.location.SDK_LOADCONTRACT,
                            });
                        }
                        signer = this.auth.getSigner();
                        contract = new exports.classes[opts.template](signer);
                        return [4 /*yield*/, contract.loadContract({ contractAddress: opts.contractAddress })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contract];
                }
            });
        });
    };
    /**
     * Returns the current network's gas price in Gwei for transactions
     * @returns {Promise<string>} Current price of gas in Gwei
     */
    SDK.prototype.getGasPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var signer, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        signer = this.auth.getSigner();
                        return [4 /*yield*/, signer.getGasPrice()];
                    case 1:
                        gasPrice = _a.sent();
                        return [2 /*return*/, ethers_1.utils.formatUnits(gasPrice, 'gwei')];
                }
            });
        });
    };
    /** Get tx status
     * @param {object} opts object containing all parameters
     * @param {string} opts.txHash hash of the transaction
     * @returns {Promise<ethers.providers.TransactionReceipt>} Transaction information
     */
    SDK.prototype.getStatus = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var signer;
            return __generator(this, function (_a) {
                if (!ethers_1.utils.isHexString(opts.txHash)) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_transaction_hash, 'txHash', opts.txHash, {
                        location: Logger_1.Logger.location.SDK_GETSTATUS,
                    });
                }
                signer = this.getProvider();
                return [2 /*return*/, signer.provider.getTransactionReceipt(opts.txHash)];
            });
        });
    };
    /** Store file on ipfs
     * @param {string} metadata path to local file or url
     * @returns {Promise<string>} Ipfs hash of the stored data
     */
    SDK.prototype.storeFile = function (_a) {
        var metadata = _a.metadata;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                if (!this.ipfsClient) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_ipfs_setup, 'ipfs', this.ipfsClient, {
                        location: Logger_1.Logger.location.SDK_STOREFILE,
                    });
                }
                result = sdk_schema_1.metadataSchema.validate({ metadata: metadata });
                if (result.error) {
                    return [2 /*return*/, Logger_1.log.throwError(result.error.details[0].message, Logger_1.Logger.code.INVALID_ARGUMENT, {
                            location: Logger_1.Logger.location.SDK_STOREFILE,
                            error: result.error.details[0].message,
                        })];
                }
                return [2 /*return*/, this.ipfsClient.uploadFile({ source: metadata })];
            });
        });
    };
    /** Store metadata on ipfs
     * @param {string} metadata valid json metadata
     * @returns {Promise<string>} Ipfs hash of the stored data
     */
    SDK.prototype.storeMetadata = function (_a) {
        var metadata = _a.metadata;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                if (!this.ipfsClient) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_ipfs_setup, 'ipfs', this.ipfsClient, {
                        location: Logger_1.Logger.location.SDK_STOREMETADATA,
                    });
                }
                result = sdk_schema_1.metadataSchema.validate({ metadata: metadata });
                if (result.error) {
                    return [2 /*return*/, Logger_1.log.throwError(result.error.details[0].message, Logger_1.Logger.code.INVALID_ARGUMENT, {
                            location: Logger_1.Logger.location.SDK_STOREMETADATA,
                            error: result.error.details[0].message,
                        })];
                }
                return [2 /*return*/, this.ipfsClient.uploadContent({ source: metadata })];
            });
        });
    };
    /** Store array of metadata on ipfs
     * @param {Array<any>} metadata an array of valid JSON Metadata
     * @returns {Promise<string>} Ipfs hash of the stored data
     */
    SDK.prototype.createFolder = function (_a) {
        var metadata = _a.metadata, _b = _a.isErc1155, isErc1155 = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_c) {
                if (!this.ipfsClient) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_ipfs_setup, 'ipfs', this.ipfsClient, {
                        location: Logger_1.Logger.location.SDK_CREATEFOLDER,
                    });
                }
                result = sdk_schema_1.metadataFolderSchema.validate({ metadata: metadata });
                if (result.error) {
                    return [2 /*return*/, Logger_1.log.throwError(result.error.details[0].message, Logger_1.Logger.code.INVALID_ARGUMENT, {
                            location: Logger_1.Logger.location.SDK_CREATEFOLDER,
                            error: result.error.details[0].message,
                        })];
                }
                metadata.forEach(function (data) {
                    if (!(0, utils_1.isJson)(data)) {
                        Logger_1.log.throwArgumentError(Logger_1.Logger.message.data_must_be_valid_json, 'data', data, {
                            location: Logger_1.Logger.location.SDK_CREATEFOLDER,
                        });
                    }
                });
                return [2 /*return*/, this.ipfsClient.uploadArray({ sources: metadata, isErc1155: isErc1155 })];
            });
        });
    };
    return SDK;
}());
exports.SDK = SDK;
//# sourceMappingURL=sdk.js.map