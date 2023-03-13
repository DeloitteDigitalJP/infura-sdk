import HttpClient from './httpClient';
export default class IpfsApiClient {
  httpClient: HttpClient;
  url: string;
  constructor();
  getIpfsImage: (ipfsHash: string) => Promise<{
    status: number;
    data: any;
  }>;
}
//# sourceMappingURL=ipfsClient.d.ts.map
