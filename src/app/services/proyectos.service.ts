import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = "https://portfoliojavier.onrender.com/proyectos/"
  constructor(private httpClient:HttpClient) { }

  public list():Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + `ver`);
  }

  public detail(id:number) : Observable <Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + `ver/` + id);
  }

  public delete(id:number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/` + id);
  }

 public save(proyecto: Proyectos) : Observable<any>{
    return this.httpClient.post<any>(this.URL + `new`, proyecto);
  }

  public editarProyectos(proyecto: Proyectos) : Observable<any>{
    return this.httpClient.put<Proyectos>(this.URL + `editar/`, proyecto);
  } 

}
