import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpCenterService {

  constructor(private http: HttpClient) { }

  accesRomdomImage(): Observable<string>{
    return this.http.get('https://dog.ceo/api/breeds/image/random').pipe(map(data => {
      const key = 'message';
      return data[key];
    }));
  }

  searchDictionary(word: string): void{
    const authHeaders = new HttpHeaders();
    authHeaders.append('Authorization', 'Token f198b39048b710d185f46290bf3fb7d38554b7fd');
    this.http.get<Word>(`https://owlbot.info/api/v4/dictionary/${word}`, {headers: new HttpHeaders({
        Authorization: 'Token f198b39048b710d185f46290bf3fb7d38554b7fd'
      })}).subscribe(response => {
      console.log(response);
    });
  }
}

interface Response {
  message: string;
  status: string;
}

interface Word {
  word: string;
  pronunciation: string;
  definitions: Definition[];
}

interface Definition {
  definition: string;
  emoji: string;
  example: string;
  imageUrl: string;
  type: string;
}
