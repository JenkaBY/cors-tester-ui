import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpRequestModel, HttpResponseModel } from './models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  sendRequest(request: HttpRequestModel): Observable<HttpResponseModel> {
    const headers = new HttpHeaders(request.headers);
    
    return this.http.request(request.method, request.url, {
      body: request.body,
      headers,
      observe: 'response',
    }).pipe(
      map((response: HttpResponse<any>) => ({
        status: response.status,
        statusText: response.statusText,
        headers: this.extractHeaders(response.headers),
        body: response.body,
      }))
    );
  }

  private extractHeaders(headers: HttpHeaders): Record<string, string> {
    const result: Record<string, string> = {};
    headers.keys().forEach(key => {
      const value = headers.get(key);
      if (value !== null) {
        result[key] = value;
      }
    });
    return result;
  }
}