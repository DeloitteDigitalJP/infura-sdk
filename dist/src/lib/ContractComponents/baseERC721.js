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
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var Logger_1 = require("../Logger");
var constants_1 = require("../constants");
var utils_1 = require("../utils");
var BaseERC721 = /** @class */ (function () {
    function BaseERC721() {
    }
    /**
     * Set contract information from the calling class (ERC721, ERC721User, ...)
     * @param {ethers.Contract} contract instance of the deployed contract
     * @returns void
     */
    BaseERC721.prototype.setContract = function (contract) {
        this.contractDeployed = contract;
        this.contractAddress = contract.address;
    };
    /**
     * Transfer function: Transfer the token 'tokenId' between 'from' and 'to addresses.
     * @param {object} params object containing all parameters
     * @param {string} params.from Address who will transfer the token
     * @param {string} params.to Address that will receive the token
     * @param {number} params.tokenId ID of the token that will be transfered
     * @notice Warning: This method will consume gas (62000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    BaseERC721.prototype.transfer = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.BASEERC721_TRANSFER,
                    });
                }
                if (!params.from || !ethers_1.ethers.utils.isAddress(params.from)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_from_address, {
                        location: Logger_1.Logger.location.BASEERC721_TRANSFER,
                    });
                }
                if (!params.to || !ethers_1.ethers.utils.isAddress(params.to)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                        location: Logger_1.Logger.location.BASEERC721_TRANSFER,
                    });
                }
                if (!Number.isInteger(params.tokenId) || params.tokenId < 0) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.tokenId_must_be_integer, 'tokenId', params.tokenId, {
                        location: Logger_1.Logger.location.BASEERC721_TRANSFER,
                    });
                }
                try {
                    options = { gasLimit: constants_1.GAS_LIMIT };
                    options = (0, utils_1.addGasPriceToOptions)(options, params.gas);
                    return [2 /*return*/, this.contractDeployed['safeTransferFrom(address,address,uint256)'](params.from, params.to, params.tokenId, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.BASEERC721_TRANSFER,
                            error: error,
                        })];
                }
                return [2 /*return*/];
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
    BaseERC721.prototype.setApprovalForAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.BASEERC721_SETAPPROVALFORALL,
                    });
                }
                if (!params.to || !ethers_1.ethers.utils.isAddress(params.to)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                        location: Logger_1.Logger.location.BASEERC721_SETAPPROVALFORALL,
                    });
                }
                if (!(0, utils_1.isBoolean)(params.approvalStatus)) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.approvalStatus_must_be_boolean, 'approvalStatus', params.approvalStatus, {
                        location: Logger_1.Logger.location.BASEERC721_SETAPPROVALFORALL,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.setApprovalForAll(params.to, params.approvalStatus, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.BASEERC721_SETAPPROVALFORALL,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Gives permission to to to transfer tokenId token to another address.
     * @param {object} params object containing all parameters
     * @param {string} params.to the address that will be approved to do the transfer.
     * @param {number} params.tokenId tokenId the nft id to transfer.
     * @notice Warning: This method will consume gas (50000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    BaseERC721.prototype.approveTransfer = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.BASEERC721_APPROVETRANSFER,
                    });
                }
                if (!params.to || !ethers_1.ethers.utils.isAddress(params.to)) {
                    Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.invalid_to_address, {
                        location: Logger_1.Logger.location.BASEERC721_APPROVETRANSFER,
                    });
                }
                if (!Number.isInteger(params.tokenId) || params.tokenId < 0) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.tokenId_must_be_integer, 'tokenId', params.tokenId, {
                        location: Logger_1.Logger.location.BASEERC721_APPROVETRANSFER,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.approve(params.to, params.tokenId, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.BASEERC721_APPROVETRANSFER,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Renouncing ownership of the smart contract (will leave the contract without an owner).
     * @notice Warning: This method will consume gas (25000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    BaseERC721.prototype.renounceOwnership = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                if (!this.contractAddress && !this.contractDeployed) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.BASEERC721_RENOUNCEOWNERSHIP,
                    });
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, params.gas);
                    return [2 /*return*/, this.contractDeployed.renounceOwnership(options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.BASEERC721_RENOUNCEOWNERSHIP,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * setContractURI function: Set the "contractURI" metadata for the specified contract
     * @param {string} contractURI ContractURI for the contract
     * (URI to a JSON file describing the contract's metadata)
     * @notice Warning: This method will consume gas (35000 gas estimated)
     * @returns {Promise<ethers.providers.TransactionResponse>} Transaction
     */
    BaseERC721.prototype.setContractURI = function (_a) {
        var contractURI = _a.contractURI, gas = _a.gas;
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_b) {
                if (!this.contractDeployed && !this.contractAddress) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_not_deployed, 'contractAddress', this.contractAddress, {
                        location: Logger_1.Logger.location.BASEERC721_SETCONTRACTURI,
                    });
                }
                if (!contractURI) {
                    Logger_1.log.throwArgumentError(Logger_1.Logger.message.contract_uri_not_defined, 'contractURI', contractURI, {
                        location: Logger_1.Logger.location.BASEERC721_SETCONTRACTURI,
                    });
                }
                /* eslint-disable no-console */
                if (!(0, utils_1.isURI)(contractURI)) {
                    console.warn("WARNING: The ContractURI \"".concat(contractURI, "\" is not a link."));
                    console.warn('WARNING: ContractURI should be a public link to a valid JSON metadata file');
                }
                try {
                    options = (0, utils_1.addGasPriceToOptions)({}, gas);
                    return [2 /*return*/, this.contractDeployed.setContractURI(contractURI, options)];
                }
                catch (error) {
                    return [2 /*return*/, Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                            location: Logger_1.Logger.location.BASEERC721_SETCONTRACTURI,
                            error: error,
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    return BaseERC721;
}());
exports.default = BaseERC721;
//# sourceMappingURL=baseERC721.js.map