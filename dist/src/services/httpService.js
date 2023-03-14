"use strict";
/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
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
var axios_1 = __importDefault(require("axios"));
var Logger_1 = require("../lib/Logger");
var HttpService = /** @class */ (function () {
    function HttpService(baseURL, apiKey) {
        if (!baseURL)
            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_base_url, {
                location: Logger_1.Logger.location.HTTPSERVICE_CONSTRUCTOR,
            });
        if (!apiKey)
            Logger_1.log.throwMissingArgumentError(Logger_1.Logger.message.no_api_key, {
                location: Logger_1.Logger.location.HTTPSERVICE_CONSTRUCTOR,
            });
        this.instance = axios_1.default.create({
            baseURL: baseURL,
            headers: {
                Authorization: "Basic ".concat(apiKey),
                'X-Infura-User-Agent': 'infura/sdk-ts 1.0.0',
            },
        });
    }
    HttpService.prototype.get = function (uri, params) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var error_1, reason, message;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.get(uri, { params: params })];
                    case 1: return [2 /*return*/, _c.sent()];
                    case 2:
                        error_1 = _c.sent();
                        reason = (_b = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
                        message = reason
                            ? "".concat(Logger_1.Logger.message.axios_error, " : ").concat(reason)
                            : "".concat(Logger_1.Logger.message.axios_error);
                        return [2 /*return*/, Logger_1.log.throwError(message, Logger_1.Logger.code.API, {
                                location: Logger_1.Logger.location.HTTPSERVICE_GET,
                                error: error_1,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HttpService.prototype.post = function (uri, params) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var error_2, reason, message;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.instance.post(uri, params)];
                    case 1: return [2 /*return*/, _c.sent()];
                    case 2:
                        error_2 = _c.sent();
                        reason = (_b = (_a = error_2 === null || error_2 === void 0 ? void 0 : error_2.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message;
                        message = reason
                            ? "".concat(Logger_1.Logger.message.axios_error, " : ").concat(reason)
                            : "".concat(Logger_1.Logger.message.axios_error);
                        return [2 /*return*/, Logger_1.log.throwError(message, Logger_1.Logger.code.API, {
                                location: Logger_1.Logger.location.HTTPSERVICE_POST,
                                error: error_2,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HttpService;
}());
exports.default = HttpService;
//# sourceMappingURL=httpService.js.map