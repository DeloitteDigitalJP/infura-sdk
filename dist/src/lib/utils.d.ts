type FormatRpcUrlOptions = {
  chainId: number;
  projectId: string;
};
export declare const isBoolean: (val: boolean | object) => boolean;
export declare const isValidString: (variable: string | undefined) => boolean;
export declare const isDefined: (variable: string | number | undefined) => boolean;
export declare const isURI: (URI: string) => boolean;
export declare const formatRpcUrl: ({ chainId, projectId }: FormatRpcUrlOptions) => string;
export declare const isJson: (param: string) => boolean;
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const addGasPriceToOptions: (options: any, gas: string | undefined) => any;
export declare const isValidPrice: (str: string) => boolean;
export declare const isValidPositiveNumber: (n: number) => boolean;
export {};
//# sourceMappingURL=utils.d.ts.map
