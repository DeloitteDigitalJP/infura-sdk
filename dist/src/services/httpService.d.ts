/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
export default class HttpService {
  private instance;
  constructor(baseURL: string, apiKey: string);
  get(uri: string, params?: any): Promise<import('axios').AxiosResponse<any, any>>;
  post(uri: string, params?: any): Promise<import('axios').AxiosResponse<any, any>>;
}
//# sourceMappingURL=httpService.d.ts.map