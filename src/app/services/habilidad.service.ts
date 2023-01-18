import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidade } from '../model/habilidade';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = 'http://localhost:8080/habilidad/'; 
  
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Habilidade[]>{
    return this.httpClient.get<Habilidade[]>(this.URL + '/ver');
  }

  public detail(id:number) : Observable <Habilidade> {
    return this.httpClient.get<Habilidade>(this.URL + 'traer/$(id)');
  }
}
