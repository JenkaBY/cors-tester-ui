export interface HttpRequestModel {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
  headers: Record<string, string>;
  body?: any;
}

export interface HttpResponseModel {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: any;
}