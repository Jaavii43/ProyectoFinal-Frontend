import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = "http://localhost:8080/educacion/"

  constructor(private httpClient:HttpClient) {  }

  public list():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + `ver`);
  }

  public detail(id:number) : Observable <Educacion> {
    return this.httpClient.get<Educacion>(this.URL + 'ver/' + id);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/` + id);
  }

 public save(Educacion: Educacion) : Observable<any>{
    return this.httpClient.post<any>(this.URL + `new`, Educacion);
  }

  public editarEducacion(Educacion: Educacion): Observable<any> {
    return this.httpClient.put<Educacion>(this.URL + `editar/`, Educacion);
  }

}
