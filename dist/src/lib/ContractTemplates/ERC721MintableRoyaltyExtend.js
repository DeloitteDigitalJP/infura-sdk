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
var ethers_1 = require("ethers");
var ERC721MintableRoyaltyExtend_1 = __importDefault(require("./artifacts/ERC721MintableRoyaltyExtend"));
var utils_1 = require("../utils");
var Logger_1 = require("../Logger");
var constants_1 = require("../constants");
var hasRoyaltyExtend_1 = __importDefault(require("../ContractComponents/hasRoyaltyExtend"));
var hasAccessControl_1 = __importDefault(require("../ContractComponents/hasAccessControl"));
var baseERC721_1 = __importDefault(require("../ContractComponents/baseERC721"));
var ERC721MintableRoyaltyExtend = /** @class */ (function () {
    function ERC721MintableRoyaltyExtend(signer) {
        this.gasLimit = constants_1.GAS_LIMIT;
        this.ADMIN_ROLE = constants_1.DEFAULT_ADMIN_ROLE;
        this.MINTER_ROLE = constants_1.DEFAULT_MINTER_ROLE;
        this.signer = signer;
        this.royalty = new hasRoyaltyExtend_1.default();
        this.accessControl = new hasAccessControl_1.default();
        this.baseERC721 = new baseERC721_1.default();
    }
    /**
     * Deploy ERC721MintableRoyaltyExtend Contract. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} params.name Name of the contract
     * @param {string} params.symbol Symbol of the contract
     * @param {string} params.contractURI ContractURI for the contract
     * (link to a JSON file describing the contract's metadata)
     * @notice Warning: This method will consume gas (4000000 gas estimated)
     * @returns {Promise<ERC721MintableRoyaltyExtend>} Contract
     */
    ERC721MintableRoyaltyExtend.prototype.deploy = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var factory, options, contract, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.contractAddress || this.contractDeployed) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                            });
                        }
                        if (!this.signer) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_signer_instance_supplied, 'signer', this.signer, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                            });
                        }
                        if (!params.name) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_name_supplied, 'name', params.name, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                            });
                        }
                        if (params.symbol === undefined) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_symbol_supplied, 'symbol', params.symbol, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                            });
                        }
                        if (params.contractURI === undefined) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_contractURI_supplied, 'contractURI', params.contractURI, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                            });
                        }
                        /* eslint-disable no-console */
                        if (!(0, utils_1.isURI)(params.contractURI)) {
                            console.warn(Logger_1.Logger.message.warning_contractURI);
                            console.warn(Logger_1.Logger.message.warning_contractURI_tips);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        factory = new ethers_1.ethers.ContractFactory(ERC721MintableRoyaltyExtend_1.default.abi, ERC721MintableRoyaltyExtend_1.default.bytecode, this.signer);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, factory.deploy(params.name, params.symbol, params.contractURI, options)];
                    case 2:
                        contract = _b.sent();
                        _a = this;
                        return [4 /*yield*/, contract.deployed()];
                    case 3:
                        _a.contractDeployed = _b.sent();
                        this.contractAddress = contract.address;
                        this.royalty.setContract(this.contractDeployed);
                        this.accessControl.setContract(this.contractDeployed);
                        this.baseERC721.setContract(this.contractDeployed);
                        return [2 /*return*/, this];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_DEPLOY,
                                error: error_1,
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Mint function: Mint a token for publicAddress with the tokenURI provided
     * @param {object} params object containing all parameters
     * @param {string} params.publicAddress destination address of the minted token
     * @param {string} params.tokenURI link to the JSON object containing metadata about the token
     * @notice Warning: This method will consume gas (120000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721MintableRoyaltyExtend.prototype.mint = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINT,
                    });
                }
                if (!params.publicAddress || !ethers_1.ethers.utils.isAddress(params.publicAddress)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_public_address, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINT,
                    });
                }
                if (!params.tokenURI) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_tokenURI_supplied, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINT,
                    });
                }
                /* eslint-disable no-console */
                if (!(0, utils_1.isURI)(params.tokenURI)) {
                    console.warn(Logger_1.Logger.message.warning_tokenURI);
                    console.warn(Logger_1.Logger.message.warning_tokenURI_tips);
                }
                try {
                    options = { gasLimit: this.gasLimit };
                    options = (0, utils_1.addGasPriceToOptions)(options, params.gas);
                    return [2 /*return*/, this.contractDeployed.mintWithTokenURI(params.publicAddress, params.tokenURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINT,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Mint function: Mint a token for publicAddress with the tokenURI provided
     * @param {object} params object containing all parameters
     * @param {string} params.publicAddress destination address of the minted token
     * @param {string} params.tokenURI link to the JSON object containing metadata about the token
     * @notice Warning: This method will consume gas (120000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721MintableRoyaltyExtend.prototype.mintWithRoyalty = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                    });
                }
                if (!params.publicAddress || !ethers_1.ethers.utils.isAddress(params.publicAddress)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_public_address, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                    });
                }
                if (!params.tokenURI) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_tokenURI_supplied, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                    });
                }
                if (!params.royaltyAddress || !ethers_1.ethers.utils.isAddress(params.royaltyAddress)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_royalty_address, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                    });
                }
                if (!(0, utils_1.isDefined)(params.fee) ||
                    !Number.isInteger(params.fee) ||
                    !(params.fee >= 0 && params.fee <= 10000)) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.fee_must_be_between_0_and_10000, 'fee', params.fee, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                    });
                }
                /* eslint-disable no-console */
                if (!(0, utils_1.isURI)(params.tokenURI)) {
                    console.warn(Logger_1.Logger.message.warning_tokenURI);
                    console.warn(Logger_1.Logger.message.warning_tokenURI_tips);
                }
                try {
                    options = { gasLimit: this.gasLimit };
                    options = (0, utils_1.addGasPriceToOptions)(options, params.gas);
                    return [2 /*return*/, this.contractDeployed.mintWithTokenURI(params.publicAddress, params.tokenURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Load an ERC721MintableRoyaltyExtend contract from an existing contract address. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} params.contractAddress Address of the ERC721MintableRoyaltyExtend contract to load
     * @returns {ERC721MintableRoyaltyExtend} Contract
     */
    ERC721MintableRoyaltyExtend.prototype.loadContract = function (params) {
        if (this.contractAddress || this.contractDeployed) {
            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_deployed, 'contractAddress', this.contractAddress, {
                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_LOADCONTRACT,
            });
        }
        if (!params.contractAddress || !ethers_1.ethers.utils.isAddress(params.contractAddress)) {
            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_LOADCONTRACT,
            });
        }
        try {
            this.contractAddress = params.contractAddress;
            this.contractDeployed = new ethers_1.ethers.Contract(this.contractAddress, ERC721MintableRoyaltyExtend_1.default.abi, this.signer);
            this.royalty.setContract(this.contractDeployed);
            this.accessControl.setContract(this.contractDeployed);
            this.baseERC721.setContract(this.contractDeployed);
            return this;
        }
        catch (error) {
            return Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_LOADCONTRACT,
                error: error,
            });
        }
    };
    /**
     * setContractURI function: Set the "contractURI" metadata for the specified contract
     * @param {object} params object containing all parameters
     * @param {string} params.contractURI ContractURI for the contract
     * (URI to a JSON file describing the contract's metadata)
     * @notice Warning: This method will consume gas (35000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721MintableRoyaltyExtend.prototype.setContractURI = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_SET_CONTRACT_URI,
                    });
                }
                if (!params.contractURI) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_contractURI_supplied, {
                        location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_SET_CONTRACT_URI,
                    });
                }
                /* eslint-disable no-console */
                if (!(0, utils_1.isURI)(params.contractURI)) {
                    console.warn(Logger_1.Logger.message.warning_contractURI);
                    console.warn(Logger_1.Logger.message.warning_contractURI_tips);
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.setContractURI(params.contractURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721MINTABLEROYALTYEXTEND_SET_CONTRACT_URI,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    return ERC721MintableRoyaltyExtend;
}());
exports.default = ERC721MintableRoyaltyExtend;
//# sourceMappingURL=ERC721MintableRoyaltyExtend.js.map