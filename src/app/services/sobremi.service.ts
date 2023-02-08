import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  URL = "http://localhost:8080/sobremi/"
  
  constructor(private http: HttpClient) { }

  public getSobremi():Observable<Sobremi>{
    return this.http.get<Sobremi>(this.URL+'traer/ver');

  }
}
