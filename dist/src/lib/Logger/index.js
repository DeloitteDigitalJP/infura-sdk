"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.Logger = exports.ErrorMessage = exports.ErrorLocation = exports.ErrorCode = void 0;
var _version_1 = __importDefault(require("../../_version"));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["NETWORK"] = "[NETWORK.ERROR]";
    ErrorCode["IPFS"] = "[IPFS.ERROR]";
    ErrorCode["RUNTIME"] = "[RUNTIME.ERROR]";
    ErrorCode["API"] = "[API.ERROR]";
    ErrorCode["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    ErrorCode["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    ErrorCode["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorLocation;
(function (ErrorLocation) {
    // AUTH
    ErrorLocation["AUTH_CONSTRUCTOR"] = "[Auth.constructor]";
    ErrorLocation["AUTH_SET_PROVIDER"] = "[Auth.setProvider]";
    // CONTRACT FACTORY
    ErrorLocation["CONTRACTFACTORY_FACTORY"] = "[ContractFactory.factory]";
    // PROVIDER
    ErrorLocation["PROVIDER_GETPROVIDER"] = "[Provider.getProvider]";
    ErrorLocation["PROVIDER_GETINJECTEDPROVIDER"] = "[Provider.getInjectedProvider]";
    // SIGNER
    ErrorLocation["SIGNER_GETWALLET"] = "[Signer.getWallet]";
    // HTTP SERVICE
    ErrorLocation["HTTPSERVICE_CONSTRUCTOR"] = "[httpService.constructor]";
    ErrorLocation["HTTPSERVICE_GET"] = "[httpService.get]";
    ErrorLocation["HTTPSERVICE_POST"] = "[httpService.post]";
    // IPFS SERVICE
    ErrorLocation["IPFSSERVICE_CONSTRUCTOR"] = "[IPFS.constructor]";
    ErrorLocation["IPFSSERVICE_UPLOADFILE"] = "[IPFS.uploadFile]";
    ErrorLocation["IPFSSERVICE_UPLOADOBJECT"] = "[IPFS.uploadObject]";
    ErrorLocation["IPFSSERVICE_UPLOADDIRECTORY"] = "[IPFS.uploadDirectory]";
    ErrorLocation["IPFSSERVICE_UNPINFILE"] = "[IPFS.unPinFile]";
    // ERC721Mintable
    ErrorLocation["ERC721MINTABLE_DEPLOY"] = "[ERC721Mintable.deploy]";
    ErrorLocation["ERC721MINTABLE_ADDGASPRICETOOPTIONS"] = "[ERC721Mintable.addGasPriceToOptions]";
    ErrorLocation["ERC721MINTABLE_MINT"] = "[ERC721Mintable.mint]";
    ErrorLocation["ERC721MINTABLE_LOADCONTRACT"] = "[ERC721Mintable.loadContract]";
    ErrorLocation["ERC721MINTABLE_SET_CONTRACT_URI"] = "[ERC721Mintable.setContractURI]";
    // ERC721MintableRoyaltyExtend
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_DEPLOY"] = "[ERC721MintableRoyaltyExtend.deploy]";
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_ADDGASPRICETOOPTIONS"] = "[ERC721MintableRoyaltyExtend.addGasPriceToOptions]";
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_MINT"] = "[ERC721MintableRoyaltyExtend.mint]";
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_MINTWITHROYALTY"] = "[ERC721MintableRoyaltyExtend.mintWithRoyalty]";
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_LOADCONTRACT"] = "[ERC721MintableRoyaltyExtend.loadContract]";
    ErrorLocation["ERC721MINTABLEROYALTYEXTEND_SET_CONTRACT_URI"] = "[ERC721MintableRoyaltyExtend.setContractURI]";
    // ERC721UserMintable
    ErrorLocation["ERC721USERMINTABLE_DEPLOY"] = "[ERC721UserMintable.deploy]";
    ErrorLocation["ERC721USERMINTABLE_ADDGASPRICETOOPTIONS"] = "[ERC721UserMintable.addGasPriceToOptions]";
    ErrorLocation["ERC721USERMINTABLE_MINT"] = "[ERC721UserMintable.mint]";
    ErrorLocation["ERC721USERMINTABLE_LOADCONTRACT"] = "[ERC721UserMintable.loadContract]";
    ErrorLocation["ERC721USERMINTABLE_SETCONTRACTURI"] = "[ERC721UserMintable.setContractURI]";
    ErrorLocation["ERC721USERMINTABLE_PRICE"] = "[ERC721UserMintable.price]";
    ErrorLocation["ERC721USERMINTABLE_SET_PRICE"] = "[ERC721UserMintable.setPrice]";
    ErrorLocation["ERC721USERMINTABLE_RESERVE"] = "[ERC721UserMintable.reserve]";
    ErrorLocation["ERC721USERMINTABLE_TOGGLE_SALE"] = "[ERC721UserMintable.toggleSale]";
    ErrorLocation["ERC721USERMINTABLE_WITHDRAW"] = "[ERC721UserMintable.withdraw]";
    ErrorLocation["ERC721USERMINTABLE_SET_BASE_URI"] = "[ERC721UserMintable.setBaseURI]";
    ErrorLocation["ERC721USERMINTABLE_REVEAL"] = "[ERC721UserMintable.reveal]";
    ErrorLocation["ERC721USERMINTABLE_TRANSFER"] = "[ERC721UserMintable.transfer]";
    // ER1155Mintable
    ErrorLocation["ERC1155MINTABLE_DEPLOY"] = "[ERC1155Mintable.deploy]";
    ErrorLocation["ERC1155MINTABLE_ADDGASPRICETOOPTIONS"] = "[ERC1155Mintable.addGasPriceToOptions]";
    ErrorLocation["ERC1155MINTABLE_MINT"] = "[ERC1155Mintable.mint]";
    ErrorLocation["ERC1155MINTABLE_MINT_BATCH"] = "[ERC1155Mintable.mintBatch]";
    ErrorLocation["ERC1155_ADD_IDS"] = "[ERC1155Mintable.addIds]";
    ErrorLocation["ERC1155MINTABLE_LOADCONTRACT"] = "[ERC1155Mintable.loadContract]";
    ErrorLocation["ERC1155MINTABLE_SET_CONTRACT_URI"] = "[ERC1155Mintable.setContractURI]";
    ErrorLocation["ERC1155MINTABLE_SET_BASE_URI"] = "[ERC1155Mintable.setBaseURI]";
    ErrorLocation["ERC1155_TRANSFER"] = "[ERC1155Mintable.transfer]";
    ErrorLocation["ERC1155_TRANSFER_BATCH"] = "[ERC1155Mintable.transferBatch]";
    ErrorLocation["ERC1155_SETAPPROVALFORALL"] = "[ERC1155Mintable.setApprovalForAll]";
    // BaseERC721
    ErrorLocation["BASEERC721_TRANSFER"] = "[BaseERC721.transfer]";
    ErrorLocation["BASEERC721_SETAPPROVALFORALL"] = "[BaseERC721.setApprovalForAll]";
    ErrorLocation["BASEERC721_APPROVETRANSFER"] = "[BaseERC721.approveTransfer]";
    ErrorLocation["BASEERC721_RENOUNCEOWNERSHIP"] = "[BaseERC721.renounceOwnership]";
    ErrorLocation["BASEERC721_SETCONTRACTURI"] = "[BaseERC721.setContractURI]";
    // HasAccessControl
    ErrorLocation["HASACCESSCONTROL_ADDADMIN"] = "[HasAccessControl.addAdmin]";
    ErrorLocation["HASACCESSCONTROL_RENOUNCEADMIN"] = "[HasAccessControl.renounceAdmin]";
    ErrorLocation["HASACCESSCONTROL_REMOVEADMIN"] = "[HasAccessControl.removeAdmin]";
    ErrorLocation["HASACCESSCONTROL_ISADMIN"] = "[HasAccessControl.isAdmin]";
    ErrorLocation["HASACCESSCONTROL_ADDMINTER"] = "[HasAccessControl.addMinter]";
    ErrorLocation["HASACCESSCONTROL_RENOUNCEMINTER"] = "[HasAccessControl.renounceMinter]";
    ErrorLocation["HASACCESSCONTROL_REMOVEMINTER"] = "[HasAccessControl.removeMinter]";
    ErrorLocation["HASACCESSCONTROL_ISMINTER"] = "[HasAccessControl.isMinter]";
    ErrorLocation["HASACCESSCONTROL_RENOUNCEOWNERSHIP"] = "[HasAccessControl.renounceOwnership]";
    // HasRoyalty
    ErrorLocation["HASROYALTY_SETROYALTIES"] = "[HasRoyalty.setRoyalties]";
    ErrorLocation["HASROYALTY_ROYALTYINFO"] = "[HasRoyalty.royaltyInfo]";
    // HasRoyaltyExtend
    ErrorLocation["HASROYALTYEXTEND_SETDEFAULTROYALTY"] = "[HasRoyaltyExtend.setDefaultRoyalty]";
    ErrorLocation["HASROYALTYEXTEND_DELETEDEFAULTROYALTY"] = "[HasRoyaltyExtend.deleteDefaultRoyalty]";
    ErrorLocation["HASROYALTYEXTEND_SETTOKENROYALTY"] = "[HasRoyaltyExtend.setTokenRoyalty]";
    ErrorLocation["HASROYALTYEXTEND_RESETTOKENROYALTY"] = "[HasRoyaltyExtend.resetTokenRoyalty]";
    ErrorLocation["HASROYALTYEXTEND_ROYALTYINFO"] = "[HasRoyaltyExtend.royaltyInfo]";
    // SDK
    ErrorLocation["SDK_CONSTRUCTOR"] = "[SDK.constructor]";
    ErrorLocation["SDK_DEPLOY"] = "[SDK.deploy]";
    ErrorLocation["SDK_LOADCONTRACT"] = "[SDK.loadContract]";
    ErrorLocation["SDK_GETCONTRACTMETADATA"] = "[SDK.getContractMetadata]";
    ErrorLocation["SDK_GETNFTS"] = "[SDK.getNFTs]";
    ErrorLocation["SDK_GETNFTSFORCOLLECTION"] = "[SDK.getNFTsForCollection]";
    ErrorLocation["SDK_GETTOKENMETADATA"] = "[SDK.getTokenMetadata]";
    ErrorLocation["SDK_GETSTATUS"] = "[SDK.GetStatus]";
    ErrorLocation["SDK_STOREFILE"] = "[SDK.storeFile]";
    ErrorLocation["SDK_STOREMETADATA"] = "[SDK.storeMetadata]";
    ErrorLocation["SDK_CREATEFOLDER"] = "[SDK.createFolder]";
    ErrorLocation["SDK_GETTRANSFERSBYBLOCKNUMBER"] = "[SDK.getTransfersByBlockNumber]";
    ErrorLocation["SDK_GET_TRANSFERS_BY_WALLET"] = "[SDK.getNftTransfersByWallet]";
    ErrorLocation["SDK_GETTRANSFERSBYBLOCKHASH"] = "[SDK.getTransfersByBlockHash]";
    ErrorLocation["SDK_GET_TRANSFERS_FROM_BLOCK_TO_BLOCK"] = "[SDK.getTransferFromBlockToBlock]";
    ErrorLocation["SDK_GET_TRANSFERS_BY_TOKEN_ID"] = "[SDK.getTransfersByTokenId]";
    ErrorLocation["SDK_GET_TRANSFERS_BY_CONTRACT"] = "[SDK.getTransfersByContractAddress]";
    ErrorLocation["SDK_GET_OWNERS_BY_TOKEN_ADDRESS"] = "[SDK.getOwnersByTokenAddress]";
    ErrorLocation["SDK_GET_OWNERS_BY_TOKEN_ADDRESS_AND_TOKEN_ID"] = "[SDK.getOwnersbyTokenAddressAndTokenId]";
    ErrorLocation["SDK_GET_COLLECTION_BY_WALLET"] = "[SDK.getCollectionsByWallet]";
    ErrorLocation["SDK_GET_SEARCH_NFT"] = "[SDK.searchNfts]";
    ErrorLocation["SDK_GET_LOWEST_TRADE_PRICE"] = "[SDK.getLowestTradePrice]";
    // Metadata
    ErrorLocation["METADATA_TOKEN_CREATION"] = "[Metadata.tokenLevelMetadata]";
    ErrorLocation["METADATA_CONTRACT_CREATION"] = "[Metadata.contractLevelMetadata]";
    ErrorLocation["METADATA_FREE_CREATION"] = "[Metadata.freeLevelMetadata]";
})(ErrorLocation = exports.ErrorLocation || (exports.ErrorLocation = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["invalid_auth_instance"] = "Invalid Auth instance.";
    ErrorMessage["no_pk_or_provider"] = "PrivateKey or provider missing!";
    ErrorMessage["no_parameters_supplied"] = "No parameters supplied.";
    ErrorMessage["no_template_type_supplied"] = "No template type supplied.";
    ErrorMessage["no_tokenId_supplied"] = "No tokenId supplied or tokenID is invalid.";
    ErrorMessage["no_tokenURI_supplied"] = "No tokenURI supplied.";
    ErrorMessage["no_projectId_supplied"] = "No project id supplied.";
    ErrorMessage["no_secretId_supplied"] = "No secret id supplied.";
    ErrorMessage["no_chainId_supplied"] = "No chain id supplied.";
    ErrorMessage["no_signer_instance_supplied"] = "No signer instance supplied.";
    ErrorMessage["no_name_supplied"] = "No name supplied.";
    ErrorMessage["no_symbol_supplied"] = "No symbol supplied.";
    ErrorMessage["no_contractURI_supplied"] = "No contractURI supplied.";
    ErrorMessage["no_baseURI_supplied"] = "No baseURI supplied.";
    ErrorMessage["no_address_supplied"] = "No address supplied.";
    ErrorMessage["no_sell_price_supplied_or_not_valid"] = "No sell price supplied or not valid.";
    ErrorMessage["no_to_address"] = "No \"to\" address supplied";
    ErrorMessage["no_rpcURL"] = "No rpcURL supplied";
    ErrorMessage["no_privateKey"] = "No privateKey supplied";
    ErrorMessage["no_provider"] = "No provider supplied";
    ErrorMessage["no_base_url"] = "No baseURL supplied";
    ErrorMessage["no_api_key"] = "No API Key supplied";
    ErrorMessage["invalid_contract_address"] = "Invalid contract address.";
    ErrorMessage["invalid_account_address"] = "Invalid account address.";
    ErrorMessage["invalid_public_address"] = "Invalid public address.";
    ErrorMessage["invalid_royalty_address"] = "Invalid royalty address.";
    ErrorMessage["invalid_from_address"] = "Invalid \"from\" address.";
    ErrorMessage["invalid_to_address"] = "Invalid \"to\" address.";
    ErrorMessage["invalid_contractURI"] = "Invalid contractURI.";
    ErrorMessage["invalid_baseURI"] = "Invalid baseURI.";
    ErrorMessage["invalid_template"] = "Invalid template.";
    ErrorMessage["invalid_transaction_hash"] = "Invalid transaction hash.";
    ErrorMessage["invalid_provider"] = "Invalid provider.";
    ErrorMessage["invalid_gas_price_supplied"] = "Invalid value for gas provided";
    ErrorMessage["invalid_max_supply"] = "Invalid maximum supply.";
    ErrorMessage["invalid_max_token_request"] = "Invalid maximum token request.";
    ErrorMessage["invalid_price"] = "Invalid price";
    ErrorMessage["invalid_mint_quantity"] = "Quantity as integer value greater than 0 required.";
    ErrorMessage["different_array_lengths"] = "IDs and quantities arrays must be of same length";
    ErrorMessage["invalid_quantity"] = "Quantity as integer value greater than 0 required.";
    ErrorMessage["invalid_block"] = "Invalid block number";
    ErrorMessage["invalid_token_address"] = "Invalid token address";
    ErrorMessage["invalid_search_string"] = "Invalid search query.";
    ErrorMessage["warning_contractURI"] = "WARNING: The supplied ContractURI is not a link.";
    ErrorMessage["warning_contractURI_tips"] = "WARNING: ContractURI should be a public link to a valid JSON metadata file";
    ErrorMessage["warning_tokenURI"] = "WARNING: The supplied TokenURI is not a link.";
    ErrorMessage["warning_tokenURI_tips"] = "WARNING: TokenURI should be a public link to a valid JSON metadata file";
    ErrorMessage["warning_baseURI"] = "WARNING: The supplied BaseURI is not a link.";
    ErrorMessage["warning_baseURI_tips"] = "WARNING: BaseURI should be a public link to a valid JSON metadata file";
    ErrorMessage["contract_already_deployed"] = "Contract already deployed.";
    ErrorMessage["contract_already_loaded"] = "Contract already loaded.";
    ErrorMessage["contract_not_deployed"] = "Contract not deployed.";
    ErrorMessage["contract_not_deployed_or_loaded"] = "Contract not deployed or loaded.";
    ErrorMessage["contract_uri_not_defined"] = "ContractURI is not defined.";
    ErrorMessage["fee_must_be_between_0_and_10000"] = "Fee must be between 0 and 10000.";
    ErrorMessage["tokenId_must_be_integer"] = "TokenId must be integer.";
    ErrorMessage["approvalStatus_must_be_boolean"] = "approvalStatus must be boolean.";
    ErrorMessage["only_privateKey_or_provider_required"] = "Only privateKey or provider required";
    ErrorMessage["chain_not_supported"] = "Chain not supported.";
    ErrorMessage["chain_not_supported_write_operations"] = "Chain not supported for WRITE operations yet.";
    ErrorMessage["axios_error"] = "An Axios error occured";
    ErrorMessage["ethers_error"] = "An Ethers error occured";
    ErrorMessage["no_infura_projectID_supplied"] = "No projectId supplied.";
    ErrorMessage["no_infura_projectSecret_supplied"] = "No projectSecret supplied.";
    ErrorMessage["unexisting_file"] = "The file does not exists";
    ErrorMessage["an_error_occured_with_ipfs_api"] = "An error occured with infura ipfs api";
    ErrorMessage["array_should_not_be_empty"] = "The Array can not be empty";
    ErrorMessage["invalid_ipfs_setup"] = "invalid ipfs setup";
    ErrorMessage["data_must_be_string"] = "data must be a string";
    ErrorMessage["data_must_be_valid_json"] = "data must be a valid json";
    ErrorMessage["invalid_ids"] = "List of IDs provided cannot be empty";
    ErrorMessage["unsupported_provider"] = "unsupported provider";
    ErrorMessage["invalid_block_number"] = "Invalid block number.";
    ErrorMessage["invalid_block_hash"] = "Invalid block hash.";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
var Logger = /** @class */ (function () {
    function Logger(_version) {
        Object.defineProperties(this, {
            version: {
                enumerable: true,
                value: _version,
                writable: false,
            },
        });
    }
    Logger.prototype.makeError = function (message, code, params) {
        var optCode = !code ? Logger.code.RUNTIME : code;
        var optParams = !params ? {} : params;
        var messageDetails = [];
        Object.keys(optParams).forEach(function (key) {
            var value = optParams[key];
            try {
                messageDetails.push("".concat(key, "=").concat(JSON.stringify(value)));
            }
            catch (error) {
                messageDetails.push("".concat(key, "=").concat(JSON.stringify(optParams[key].toString())));
            }
        });
        messageDetails.push("code=".concat(optCode));
        messageDetails.push("version=".concat(this.version));
        var errorMsg = message;
        if (messageDetails.length) {
            errorMsg += " (".concat(messageDetails.join(', '), ")");
        }
        return errorMsg;
    };
    Logger.prototype.throwError = function (message, code, params) {
        throw Error(this.makeError(message, code, params));
    };
    Logger.prototype.throwArgumentError = function (message, name, value) {
        var params = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            params[_i - 3] = arguments[_i];
        }
        var addedParams = params;
        addedParams[0].argument = name;
        addedParams[0].value = value;
        return this.throwError.apply(this, __spreadArray([message, Logger.code.INVALID_ARGUMENT], addedParams, false));
    };
    Logger.prototype.throwMissingArgumentError = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.throwError.apply(this, __spreadArray(["missing argument: ".concat(message), Logger.code.MISSING_ARGUMENT], params, false));
    };
    Logger.prototype.throwTooManyArgumentError = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return this.throwError.apply(this, __spreadArray(["too many arguments: ".concat(message), Logger.code.UNEXPECTED_ARGUMENT], params, false));
    };
    Logger.code = ErrorCode;
    Logger.location = ErrorLocation;
    Logger.message = ErrorMessage;
    return Logger;
}());
exports.Logger = Logger;
exports.log = new Logger(_version_1.default);
//# sourceMappingURL=index.js.map