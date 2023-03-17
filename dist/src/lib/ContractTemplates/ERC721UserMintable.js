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
var ERC721UserMintable_1 = __importDefault(require("./artifacts/ERC721UserMintable"));
var hasRoyalty_1 = __importDefault(require("../ContractComponents/hasRoyalty"));
var hasAccessControl_1 = __importDefault(require("../ContractComponents/hasAccessControl"));
var baseERC721_1 = __importDefault(require("../ContractComponents/baseERC721"));
var utils_1 = require("../utils");
var constants_1 = require("../constants");
var Logger_1 = require("../Logger");
var ERC721UserMintable = /** @class */ (function () {
    function ERC721UserMintable(signer) {
        this.gasLimit = constants_1.GAS_LIMIT;
        this.signer = signer;
        this.royalty = new hasRoyalty_1.default();
        this.accessControl = new hasAccessControl_1.default();
        this.baseERC721 = new baseERC721_1.default();
    }
    /**
     * Deploy ERC721UserMintable Contract. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} params.name Name of the contract
     * @param {string} params.symbol Symbol of the contract
     * @param {string} params.baseURI baseURI for the contract
     * @param {string} params.maxSupply Maximum supply of tokens for the contract
     * @param {string} params.price Price to mint one token
     * @returns {Promise<ERC721Mintable>} Contract
     */
    ERC721UserMintable.prototype.deploy = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var factory, priceInWei, options, contract, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.contractAddress || this.contractDeployed) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!this.signer) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_signer_instance_supplied, 'signer', this.signer, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.name) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_name_supplied, 'name', params.name, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.symbol) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_symbol_supplied, 'symbol', params.symbol, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.baseURI) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_baseURI_supplied, 'baseURI', params.baseURI, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.contractURI) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_contractURI, 'contractURI', params.contractURI, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.maxSupply) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_max_supply, 'maxSupply', params.maxSupply, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!(0, utils_1.isValidPrice)(params.price)) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_price, 'price', params.price, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        if (!params.maxTokenRequest) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_max_token_request, 'maxSupply', params.maxSupply, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                            });
                        }
                        /* eslint-disable no-console */
                        if (!(0, utils_1.isURI)(params.baseURI)) {
                            console.warn(Logger_1.Logger.message.warning_contractURI);
                            console.warn(Logger_1.Logger.message.warning_contractURI_tips);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        factory = new ethers_1.ethers.ContractFactory(ERC721UserMintable_1.default.abi, ERC721UserMintable_1.default.bytecode, this.signer);
                        priceInWei = ethers_1.utils.parseEther(params.price);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, factory.deploy(params.name, params.symbol, params.baseURI, params.contractURI, params.maxSupply, priceInWei, params.maxTokenRequest, options)];
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
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_DEPLOY,
                                error: error_1,
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load an ERC721UserMintable contract from an existing contract address. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} contractAddress Address of the ERC721UserMintable contract to load
     * @returns {ERC721UserMintable} Contract
     */
    ERC721UserMintable.prototype.loadContract = function (params) {
        if (this.contractAddress || this.contractDeployed) {
            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_loaded, 'contractAddress', this.contractAddress, {
                location: Logger_1.Logger.location.ERC721USERMINTABLE_LOADCONTRACT,
            });
        }
        if (!params.contractAddress || !ethers_1.ethers.utils.isAddress(params.contractAddress)) {
            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                location: Logger_1.Logger.location.ERC721USERMINTABLE_LOADCONTRACT,
            });
        }
        try {
            this.contractDeployed = new ethers_1.ethers.Contract(params.contractAddress, ERC721UserMintable_1.default.abi, this.signer);
            this.contractAddress = params.contractAddress;
            this.royalty.setContract(this.contractDeployed);
            this.accessControl.setContract(this.contractDeployed);
            this.baseERC721.setContract(this.contractDeployed);
            return this;
        }
        catch (error) {
            return Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                location: Logger_1.Logger.location.ERC721USERMINTABLE_LOADCONTRACT,
                error: error,
            });
        }
    };
    /**
     * Mint function: Mint a token for publicAddress with the tokenURI provided
     * @param {object} params object containing all parameters
     * @param {number} params.quantity amount of token to mint
     * @param {string} params.cost cost for each token
     * @notice Warning: This method will consume gas (120000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.mint = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedCost;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_MINT,
                    });
                }
                if (!params.quantity || !Number.isInteger(params.quantity) || params.quantity < 1) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_mint_quantity, 'quantity', params.quantity, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_MINT,
                    });
                }
                parsedCost = ethers_1.ethers.utils.parseEther(params.cost);
                try {
                    return [2 /*return*/, this.contractDeployed.mint(params.quantity, {
                            value: parsedCost,
                            gasLimit: this.gasLimit,
                        })];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_MINT,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the value of the mint per token (in Ether)
     * @returns {string} value in Ether of the mint per token
     */
    ERC721UserMintable.prototype.price = function () {
        return __awaiter(this, void 0, void 0, function () {
            var price, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.contractDeployed.price()];
                    case 1:
                        price = _a.sent();
                        return [2 /*return*/, ethers_1.utils.formatEther(price)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC721USERMINTABLE_PRICE,
                                error: error_2,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Reserves (mints) an amount of tokens to the owner of the contract
     * @param {object} params object containing all parameters
     * @param {number} params.quantity The quantity of tokens to mint to the owner (1-20)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.reserve = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_RESERVE,
                    });
                }
                if (!params.quantity || !Number.isInteger(params.quantity) || !(params.quantity > 0)) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_mint_quantity, 'quantity', params.quantity, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_RESERVE,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.reserve(params.quantity, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_RESERVE,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Sets the status of the contract to revealed and sets the baseURI
     * @param {object} params object containing all parameters
     * @param {string} params.baseURI The baseURI of the contract
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.reveal = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_REVEAL,
                    });
                }
                if (!params.baseURI) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_baseURI, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_REVEAL,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.reveal(params.baseURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_REVEAL,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * setBaseURI function: Set the "baseURI" metadata for the specified contract
     * @param {object} params object containing all parameters
     * @param {string} params.baseURI baseURI for the contract
     * (URI to a JSON file describing the contract's metadata)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.setBaseURI = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_SET_BASE_URI,
                    });
                }
                if (!params.baseURI) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_baseURI, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_SET_BASE_URI,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.setBaseURI(params.baseURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_SET_BASE_URI,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Sets the price (in Ether) of the mint
     * @param {object} params object containing all parameters
     * @param {string} params.price Price of the mint (per token) in Ether as a string
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.setPrice = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var priceInWei, options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_SET_PRICE,
                    });
                }
                if (params.price === undefined || !(0, utils_1.isValidPrice)(params.price)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_price, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_SET_PRICE,
                    });
                }
                try {
                    priceInWei = ethers_1.utils.parseEther(params.price);
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.setPrice(priceInWei, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721MINTABLE_MINT,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Toggles the sale status of the contract
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.toggleSale = function (gas) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_TOGGLE_SALE,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, gas);
                    return [2 /*return*/, this.contractDeployed.toggleSale(options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_TOGGLE_SALE,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Withdraws ether balance to owner address
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC721UserMintable.prototype.withdraw = function (gas) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractAddress && !this.contractDeployed) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.ERC721USERMINTABLE_WITHDRAW,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, gas);
                    return [2 /*return*/, this.contractDeployed.withdraw(options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.ERC721USERMINTABLE_WITHDRAW,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    return ERC721UserMintable;
}());
exports.default = ERC721UserMintable;
//# sourceMappingURL=ERC721UserMintable.js.map