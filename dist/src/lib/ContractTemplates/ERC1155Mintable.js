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
var ERC1155Mintable_1 = __importDefault(require("./artifacts/ERC1155Mintable"));
var hasRoyalty_1 = __importDefault(require("../ContractComponents/hasRoyalty"));
var hasAccessControl_1 = __importDefault(require("../ContractComponents/hasAccessControl"));
var utils_1 = require("../utils");
var constants_1 = require("../constants");
var Logger_1 = require("../Logger");
var ERC1155Mintable = /** @class */ (function () {
    function ERC1155Mintable(signer) {
        this.gasLimit = constants_1.GAS_LIMIT;
        this.signer = signer;
        this.accessControl = new hasAccessControl_1.default();
        this.royalty = new hasRoyalty_1.default();
    }
    /**
     * Deploy ERC1155Mintable Contract. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} params.baseURI BaseURI of the contract
     * @param {string} params.ContractURI contractURI of the contract
     * @param {array} params.ids IDs of valid tokens for the contract
     * @param {number} params.gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (varies depending on array size)
     * @returns {Promise<ERC1155Mintable>} Contract
     */
    ERC1155Mintable.prototype.deploy = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var factory, options, contract, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.contractAddress || this.contractDeployed) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_DEPLOY,
                            });
                        }
                        if (!this.signer) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_signer_instance_supplied, 'signer', this.signer, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_DEPLOY,
                            });
                        }
                        if (!params.baseURI) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_baseURI_supplied, 'baseURI', params.baseURI, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_DEPLOY,
                            });
                        }
                        /* eslint-disable no-console */
                        if (!(0, utils_1.isURI)(params.baseURI)) {
                            console.warn(Logger_1.Logger.message.warning_baseURI);
                            console.warn(Logger_1.Logger.message.warning_baseURI_tips);
                        }
                        if (!params.contractURI) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.no_contractURI_supplied, 'contractURI', params.contractURI, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_DEPLOY,
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
                        factory = new ethers_1.ethers.ContractFactory(ERC1155Mintable_1.default.abi, ERC1155Mintable_1.default.bytecode, this.signer);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, factory.deploy(params.baseURI, params.contractURI, params.ids, options)];
                    case 2:
                        contract = _b.sent();
                        _a = this;
                        return [4 /*yield*/, contract.deployed()];
                    case 3:
                        _a.contractDeployed = _b.sent();
                        this.contractAddress = contract.address;
                        this.setContracts();
                        return [2 /*return*/, this];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_DEPLOY,
                                error: error_1,
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Load an ERC1155Mintable contract from an existing contract address. Used by the SDK class
     * @param {object} params object containing all parameters
     * @param {string} params.contractAddress Address of the ERC1155Mintable contract to load
     * @returns {ERC1155Mintable} Contract
     */
    ERC1155Mintable.prototype.loadContract = function (params) {
        if (this.contractAddress || this.contractDeployed) {
            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_already_deployed, 'contractAddress', this.contractAddress, {
                location: Logger_1.Logger.location.ERC1155MINTABLE_LOADCONTRACT,
            });
        }
        if (!params.contractAddress || !ethers_1.utils.isAddress(params.contractAddress)) {
            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                location: Logger_1.Logger.location.ERC1155MINTABLE_LOADCONTRACT,
            });
        }
        try {
            this.contractDeployed = new ethers_1.ethers.Contract(params.contractAddress, ERC1155Mintable_1.default.abi, this.signer);
            this.setContracts();
            return this;
        }
        catch (error) {
            return Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                location: Logger_1.Logger.location.ERC1155MINTABLE_LOADCONTRACT,
                error: error,
            });
        }
    };
    /**
     * Mint function: Mint a token for publicAddress
     * @param {string} to destination address of the minted token
     * @param {number} id ID of the token to mint
     * @param {number} quantity Quantity of the specified token to mint
     * @param {number} gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (52000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.mint = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT,
                            });
                        }
                        if (!params.to || !ethers_1.utils.isAddress(params.to)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT,
                            });
                        }
                        if (!params.quantity || !Number.isInteger(params.quantity) || params.quantity < 1) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_mint_quantity, 'quantity', params.quantity, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT,
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.mint(params.to, params.id, params.quantity, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT,
                                error: error_2,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Mint function: Mint multiple tokens for publicAddress
     * @param {string} to destination address of the minted token
     * @param {number} id ID of the token to mint
     * @param {number} quantity Quantity of the specified token to mint
     * @param {number} gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (varies depending on size of array)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.mintBatch = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT_BATCH,
                            });
                        }
                        if (!params.to || !ethers_1.utils.isAddress(params.to)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_contract_address, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT_BATCH,
                            });
                        }
                        if (params.ids.length !== params.quantities.length) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.different_array_lengths, 'ids', params.ids, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT_BATCH,
                            });
                        }
                        params.quantities.forEach(function (quantity) {
                            if (!quantity || !Number.isInteger(quantity) || quantity < 1) {
                                Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_quantity, 'quantity', quantity, {
                                    location: Logger_1.Logger.location.ERC1155MINTABLE_MINT_BATCH,
                                });
                            }
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.mintBatch(params.to, params.ids, params.quantities, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_MINT_BATCH,
                                error: error_3,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Allow admin of contract to add new valid token IDs
     * @param {object} params object containing all parameters
     * @param {number[]} params.ids array of IDs to add
     * @param {number} params.gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (varies depending on size of array)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.addIds = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155_ADD_IDS,
                            });
                        }
                        if (!params.ids || params.ids.length < 1) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_ids, 'ids', params.ids, {
                                location: Logger_1.Logger.location.ERC1155_ADD_IDS,
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.addIds(params.ids, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155_ADD_IDS,
                                error: error_4,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * setBaseURI function: Set the "baseURI" metadata for the specified contract
     * @param {object} params object containing all parameters
     * @param {string} params.baseURI baseURI for the contract
     * @param {number} params.gas (Optional) gas parameter to pass to transaction
     * (URI to a JSON file describing the contract's metadata)
     * @notice Warning: This method will consume gas (35000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.setBaseURI = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_BASE_URI,
                            });
                        }
                        if (!params.baseURI) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_baseURI, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_BASE_URI,
                            });
                        }
                        /* eslint-disable no-console */
                        if (!(0, utils_1.isURI)(params.baseURI)) {
                            console.warn(Logger_1.Logger.message.warning_baseURI);
                            console.warn(Logger_1.Logger.message.warning_baseURI_tips);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.setURI(params.baseURI, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_BASE_URI,
                                error: error_5,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * setContractURI function: Set the "contractURI" metadata for the specified contract
     * @param {object} params object containing all parameters
     * @param {string} params.contractURI ContractURI for the contract
     * (URI to a JSON file describing the contract's metadata)
     * @notice Warning: This method will consume gas (35000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.setContractURI = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_CONTRACT_URI,
                            });
                        }
                        if (!params.contractURI) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_contractURI_supplied, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_CONTRACT_URI,
                            });
                        }
                        /* eslint-disable no-console */
                        if (!(0, utils_1.isURI)(params.contractURI)) {
                            console.warn(Logger_1.Logger.message.warning_contractURI);
                            console.warn(Logger_1.Logger.message.warning_contractURI_tips);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.setContractURI(params.contractURI, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_6 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155MINTABLE_SET_CONTRACT_URI,
                                error: error_6,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * SafeTransfer function: safeTransfer the token 'tokenId' between 'from' and 'to addresses.
     * @param {object} params object containing all parameters
     * @param {string} params.from Address who will transfer the token
     * @param {string} params.to Address that will receive the token
     * @param {number} params.tokenId ID of the token that will be transfered
     * @param {number} params.quantity quantity of the given tokenId to be transferred
     * @param {number} params.gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (53000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.transfer = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                            });
                        }
                        if (!params.from || !ethers_1.ethers.utils.isAddress(params.from)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_from_address, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                            });
                        }
                        if (!params.to || !ethers_1.utils.isAddress(params.to)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                            });
                        }
                        if (!Number.isInteger(params.tokenId) || params.tokenId < 0) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.tokenId_must_be_integer, 'tokenId', params.tokenId, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                            });
                        }
                        if (!params.quantity || !Number.isInteger(params.quantity) || params.quantity < 1) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_mint_quantity, 'quantity', params.quantity, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = { gasLimit: this.gasLimit };
                        options = (0, utils_1.addGasPriceToOptions)(options, params.gas);
                        return [4 /*yield*/, this.contractDeployed.safeTransferFrom(params.from, params.to, params.tokenId, params.quantity, [], options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_7 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER,
                                error: error_7,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * TransferBatch function: safeBatchTransfer the 'tokenIds' between 'from' and 'to addresses.
     * @param {object} params object containing all parameters
     * @param {string} params.from Address who will transfer the token
     * @param {string} params.to Address that will receive the token
     * @param {number} params.tokenIds IDs of the tokens that will be transferred
     * @param {number} params.quantities quantities of the given tokenId to be transferred
     * @param {number} params.gas (Optional) gas parameter to pass to transaction
     * @notice Warning: This method will consume gas (varies depending on array size)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.transferBatch = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                            });
                        }
                        if (!params.from || !ethers_1.utils.isAddress(params.from)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_from_address, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                            });
                        }
                        if (!params.to || !ethers_1.ethers.utils.isAddress(params.to)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                            });
                        }
                        if (params.tokenIds.length !== params.quantities.length) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.different_array_lengths, 'tokenIds', params.tokenIds, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                            });
                        }
                        params.tokenIds.forEach(function (tokenId) {
                            if (!Number.isInteger(tokenId)) {
                                Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_quantity, 'tokenId', tokenId, {
                                    location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                                });
                            }
                        });
                        params.quantities.forEach(function (quantity) {
                            if (!quantity || !Number.isInteger(quantity) || quantity < 1) {
                                Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_quantity, 'quantity', quantity, {
                                    location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                                });
                            }
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = { gasLimit: this.gasLimit };
                        options = (0, utils_1.addGasPriceToOptions)(options, params.gas);
                        return [4 /*yield*/, this.contractDeployed.safeBatchTransferFrom(params.from, params.to, params.tokenIds, params.quantities, [], options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_8 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155_TRANSFER_BATCH,
                                error: error_8,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * setApprovalForAll will give the full approval rights for a given address
     * @param {object} params object containing all parameters
     * @param {string} params.to Address which will receive the approval rights
     * @param {boolean} params.approvalStatus Boolean representing the approval to be given (true)
     *  or revoked (false)
     * @notice Warning: This method will consume gas (46000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    ERC1155Mintable.prototype.setApprovalForAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.contractDeployed && !this.contractAddress) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                                location: Logger_1.Logger.location.ERC1155_SETAPPROVALFORALL,
                            });
                        }
                        if (!params.to || !ethers_1.ethers.utils.isAddress(params.to)) {
                            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                                location: Logger_1.Logger.location.ERC1155_SETAPPROVALFORALL,
                            });
                        }
                        if (!(0, utils_1.isBoolean)(params.approvalStatus)) {
                            Logger_1.log.throwArgumentError(Logger_1.Logger.message.approvalStatus_must_be_boolean, 'approvalStatus', params.approvalStatus, {
                                location: Logger_1.Logger.location.ERC1155_SETAPPROVALFORALL,
                            });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                        return [4 /*yield*/, this.contractDeployed.setApprovalForAll(params.to, params.approvalStatus, options)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_9 = _a.sent();
                        return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                                location: Logger_1.Logger.location.ERC1155_SETAPPROVALFORALL,
                                error: error_9,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ERC1155Mintable.prototype.setContracts = function () {
        this.contractAddress = this.contractDeployed.address;
        this.accessControl.setContract(this.contractDeployed);
        this.royalty.setContract(this.contractDeployed);
    };
    return ERC1155Mintable;
}());
exports.default = ERC1155Mintable;
//# sourceMappingURL=ERC1155Mintable.js.map