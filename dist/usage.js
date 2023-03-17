"use strict";
/* eslint-disable no-console */
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
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var index_1 = require("./src/index");
(0, dotenv_1.config)();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var acc, sdk, tokenMetadata, _a, _b, storeTokenMetadata, collectionMetadata, _c, _d, storeMetadata, newContract, mint, minted, contractMetadata, tokenMetadataResult, storeArrayMetadataForERC1155, _e, _f, _g, _h, _j, _k, _l, newContractERC1155, tx1, mintedNFT, storeArrayMetadata, _m, _o, _p, _q, _r, _s, _t, ERC721UserMintable, tx, txMinted, mintedNFTERC721;
    var _u, _v, _w, _x, _y, _z, _0, _1;
    var _2, _3;
    return __generator(this, function (_4) {
        switch (_4.label) {
            case 0:
                acc = new index_1.Auth({
                    privateKey: process.env.WALLET_PRIVATE_KEY,
                    projectId: process.env.INFURA_PROJECT_ID,
                    secretId: process.env.INFURA_PROJECT_SECRET,
                    rpcUrl: process.env.EVM_RPC_URL,
                    chainId: 5,
                    ipfs: {
                        projectId: process.env.INFURA_IPFS_PROJECT_ID,
                        apiKeySecret: process.env.INFURA_IPFS_PROJECT_SECRET,
                    },
                });
                sdk = new index_1.SDK(acc);
                _b = (_a = index_1.Metadata).openSeaTokenLevelStandard;
                _u = {
                    description: 'Friendly OpenSea Creature that enjoys long swims in the ocean.',
                    external_url: 'https://openseacreatures.io/3'
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 1:
                tokenMetadata = _b.apply(_a, [(_u.image = _4.sent(),
                        _u.name = 'Dave Starbelly',
                        _u.attributes = [],
                        _u)]);
                console.log('tokenMetadata', tokenMetadata);
                return [4 /*yield*/, sdk.storeMetadata({ metadata: tokenMetadata })];
            case 2:
                storeTokenMetadata = _4.sent();
                console.log(':rocket: ~ file: usage.ipfs.ts:60 ~ storeMetadata', storeTokenMetadata);
                _d = (_c = index_1.Metadata).openSeaCollectionLevelStandard;
                _v = {
                    name: 'My awesome collection',
                    description: "A long description explaining why it's awesome"
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 3:
                collectionMetadata = _d.apply(_c, [(_v.image = _4.sent(),
                        _v.external_link = 'https://myawesomewebsite.net',
                        _v)]);
                console.log('collectionMetadata ----', collectionMetadata);
                return [4 /*yield*/, sdk.storeMetadata({ metadata: collectionMetadata })];
            case 4:
                storeMetadata = _4.sent();
                console.log(':rocket: ~ file: usage.ipfs.ts:60 ~ storeMetadata', storeMetadata);
                return [4 /*yield*/, sdk.deploy({
                        template: index_1.TEMPLATES.ERC721Mintable,
                        params: {
                            name: '1507Contract',
                            symbol: 'TOC',
                            contractURI: storeMetadata,
                        },
                    })];
            case 5:
                newContract = _4.sent();
                console.log('contract address: \n', newContract.contractAddress);
                return [4 /*yield*/, newContract.mint({
                        publicAddress: (_2 = process.env.WALLET_PUBLIC_ADDRESS) !== null && _2 !== void 0 ? _2 : '0x3bE0Ec232d2D9B3912dE6f1ff941CB499db4eCe7',
                        tokenURI: storeTokenMetadata,
                    })];
            case 6:
                mint = _4.sent();
                return [4 /*yield*/, mint.wait()];
            case 7:
                minted = _4.sent();
                console.log(minted);
                return [4 /*yield*/, sdk.api.getContractMetadata({
                        contractAddress: newContract.contractAddress,
                    })];
            case 8:
                contractMetadata = _4.sent();
                console.log('contractMetadata', contractMetadata);
                return [4 /*yield*/, sdk.api.getTokenMetadata({
                        contractAddress: newContract.contractAddress,
                        tokenId: '0',
                    })];
            case 9:
                tokenMetadataResult = _4.sent();
                console.log('tokenMetadataResult', tokenMetadataResult);
                _f = (_e = sdk).createFolder;
                _w = {};
                _h = (_g = index_1.Metadata).openSeaTokenLevelStandard;
                _x = {
                    description: 'Friendly OpenSea Creature that enjoys long swims in the ocean.',
                    external_url: 'https://openseacreatures.io/3'
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 10:
                _j = [
                    _h.apply(_g, [(_x.image = _4.sent(),
                            _x.name = 'Dave Starbelly',
                            _x.attributes = [],
                            _x)])
                ];
                _l = (_k = index_1.Metadata).openSeaTokenLevelStandard;
                _y = {
                    description: 'Friendly OpenSea Creature that enjoys long swims in the ocean.',
                    external_url: 'https://openseacreatures.io/3'
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 11: return [4 /*yield*/, _f.apply(_e, [(_w.metadata = _j.concat([
                        _l.apply(_k, [(_y.image = _4.sent(),
                                _y.name = 'Dave Starbelly',
                                _y.attributes = [],
                                _y)])
                    ]),
                        _w.isErc1155 = true,
                        _w)])];
            case 12:
                storeArrayMetadataForERC1155 = _4.sent();
                return [4 /*yield*/, sdk.deploy({
                        template: index_1.TEMPLATES.ERC1155Mintable,
                        params: {
                            baseURI: storeArrayMetadataForERC1155,
                            contractURI: storeTokenMetadata,
                            ids: [0, 1],
                        },
                    })];
            case 13:
                newContractERC1155 = _4.sent();
                console.log('Contract ERC 1155', newContractERC1155.contractAddress);
                return [4 /*yield*/, newContractERC1155.mint({
                        to: (_3 = process.env.WALLET_PUBLIC_ADDRESS) !== null && _3 !== void 0 ? _3 : '0x3bE0Ec232d2D9B3912dE6f1ff941CB499db4eCe7',
                        id: 1,
                        quantity: 1,
                    })];
            case 14:
                tx1 = _4.sent();
                return [4 /*yield*/, tx1.wait()];
            case 15:
                mintedNFT = _4.sent();
                console.log('mintedNFT', mintedNFT);
                _o = (_m = sdk).createFolder;
                _z = {};
                _q = (_p = index_1.Metadata).openSeaTokenLevelStandard;
                _0 = {
                    description: 'Friendly OpenSea Creature that enjoys long swims in the ocean.',
                    external_url: 'https://openseacreatures.io/3'
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 16:
                _r = [
                    _q.apply(_p, [(_0.image = _4.sent(),
                            _0.name = 'Dave Starbelly',
                            _0.attributes = [],
                            _0)])
                ];
                _t = (_s = index_1.Metadata).openSeaTokenLevelStandard;
                _1 = {
                    description: 'Friendly OpenSea Creature that enjoys long swims in the ocean.',
                    external_url: 'https://openseacreatures.io/3'
                };
                return [4 /*yield*/, sdk.storeFile({
                        metadata: 'https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png',
                    })];
            case 17: return [4 /*yield*/, _o.apply(_m, [(_z.metadata = _r.concat([
                        _t.apply(_s, [(_1.image = _4.sent(),
                                _1.name = 'Dave Starbelly',
                                _1.attributes = [],
                                _1)])
                    ]),
                        _z.isErc1155 = false,
                        _z)])];
            case 18:
                storeArrayMetadata = _4.sent();
                return [4 /*yield*/, sdk.deploy({
                        template: index_1.TEMPLATES.ERC721UserMintable,
                        params: {
                            name: 'Payable Mint Contract',
                            symbol: 'PYMC',
                            contractURI: storeMetadata,
                            baseURI: storeArrayMetadata,
                            maxSupply: 10,
                            price: '0.00001',
                            maxTokenRequest: 1,
                        },
                    })];
            case 19:
                ERC721UserMintable = _4.sent();
                console.log('Contract ERC721 UserMintable', ERC721UserMintable.contractAddress);
                return [4 /*yield*/, ERC721UserMintable.toggleSale()];
            case 20:
                tx = _4.sent();
                return [4 /*yield*/, tx.wait()];
            case 21:
                _4.sent();
                return [4 /*yield*/, ERC721UserMintable.mint({
                        quantity: 1,
                        cost: '0.00002',
                    })];
            case 22:
                txMinted = _4.sent();
                return [4 /*yield*/, txMinted.wait()];
            case 23:
                mintedNFTERC721 = _4.sent();
                console.log('mintedNFT', mintedNFTERC721);
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=usage.js.map