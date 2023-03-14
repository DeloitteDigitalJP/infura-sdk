"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPositiveNumber = exports.isValidPrice = exports.addGasPriceToOptions = exports.sleep = exports.isJson = exports.formatRpcUrl = exports.isURI = exports.isDefined = exports.isValidString = exports.isBoolean = void 0;
var ethers_1 = require("ethers");
var availableChains_1 = require("./Auth/availableChains");
var Logger_1 = require("./Logger");
var isBoolean = function (val) {
    return typeof val === 'boolean' ||
        (typeof val === 'object' && val !== null && typeof val.valueOf() === 'boolean');
};
exports.isBoolean = isBoolean;
var isValidString = function (variable) {
    return variable !== undefined && variable !== null && variable !== '' && typeof variable === 'string';
};
exports.isValidString = isValidString;
var isDefined = function (variable) {
    return variable !== undefined && variable !== null && variable !== '';
};
exports.isDefined = isDefined;
var isURI = function (URI) { return !!URI.match(/^(ipfs|http|https):\/\//gi); };
exports.isURI = isURI;
var formatRpcUrl = function (_a) {
    var chainId = _a.chainId, projectId = _a.projectId;
    return "".concat(availableChains_1.chainUrls[chainId], "/v3/").concat(projectId);
};
exports.formatRpcUrl = formatRpcUrl;
var isJson = function (param) {
    if (typeof param !== 'string')
        return false;
    try {
        JSON.parse(param);
    }
    catch (err) {
        return false;
    }
    return true;
};
exports.isJson = isJson;
// eslint-disable-next-line no-promise-executor-return
var sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
exports.sleep = sleep;
var addGasPriceToOptions = function (options, gas) {
    var newOptions = options;
    if (gas) {
        if (typeof parseFloat(gas) !== 'number') {
            Logger_1.log.throwArgumentError(Logger_1.Logger.message.invalid_gas_price_supplied, 'gas', gas, {
                // TODO: update location
                location: Logger_1.Logger.location.ERC721MINTABLE_ADDGASPRICETOOPTIONS,
            });
        }
        try {
            newOptions.gasPrice = ethers_1.ethers.utils.parseUnits(gas, 'gwei');
        }
        catch (error) {
            return Logger_1.log.throwError(Logger_1.Logger.message.ethers_error, Logger_1.Logger.code.NETWORK, {
                // TODO: update location
                location: Logger_1.Logger.location.ERC721MINTABLE_ADDGASPRICETOOPTIONS,
                error: error,
            });
        }
    }
    return newOptions;
};
exports.addGasPriceToOptions = addGasPriceToOptions;
var isValidPrice = function (str) {
    if (typeof str !== 'string')
        return false;
    if (parseFloat(str) < 0)
        return false;
    return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
};
exports.isValidPrice = isValidPrice;
var isValidPositiveNumber = function (n) {
    if (n < 0)
        return false;
    return !Number.isNaN(n);
};
exports.isValidPositiveNumber = isValidPositiveNumber;
//# sourceMappingURL=utils.js.map