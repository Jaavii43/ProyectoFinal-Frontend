import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidade } from '../model/habilidade';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = "https://portfoliojavier.onrender.com/habilidad/"
  
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Habilidade[]>{
    return this.httpClient.get<Habilidade[]>(this.URL + `ver`);
  }

  public detail(id:number) : Observable <Habilidade> {
    return this.httpClient.get<Habilidade>(this.URL + `ver/` + id);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/` + id);
  }

 public save(Habilidad: Habilidade) : Observable<any>{
    return this.httpClient.post<any>(this.URL + `new`, Habilidad);
  }
  
  public editarHabilidad(Habilidad: Habilidade): Observable<any> {
    return this.httpClient.put<Habilidade>(this.URL + `editar/`, Habilidad);
  }
}
