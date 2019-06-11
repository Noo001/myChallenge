import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string){
    url = 'http://www.omdbapi.com/?apikey=eb60fb91&t=' + url;
    return this.httpClient.get(url);
  }
}
