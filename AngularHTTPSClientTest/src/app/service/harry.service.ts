import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarryService {

  constructor(private httpClient: HttpClient) { }

  getRamHome(): Observable<string> {
    return this.httpClient.get<string>('https://www.potterapi.com/v1/sortingHat', {
      params: new HttpParams().set('key', '$2a$10$S51exb.d0tJF9g/8VPpbyORKGi9tISS2oAYcIcGIpVVZkGB2JpLM2')
    });
  }
}

interface Resp{
  message: string;
  status: string;
}
