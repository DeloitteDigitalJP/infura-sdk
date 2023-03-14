/*!
 * Copyright(c) ConsenSys Software Inc.
 * Copyright(c) https://consensys.net/
 * MIT Licensed
 */
export default class HttpClient {
  private instance;
  constructor(baseURL: string);
  get(uri: string): Promise<import('axios').AxiosResponse<any, any>>;
  post(uri: string, params?: any): Promise<import('axios').AxiosResponse<any, any>>;
}
//# sourceMappingURL=httpClient.d.ts.map