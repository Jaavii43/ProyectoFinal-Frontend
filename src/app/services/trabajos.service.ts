import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from '../model/trabajos';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  URL = "https://portfoliojavier.onrender.com/trabajos/"

  constructor(private httpClient:HttpClient) { }
    
    public list():Observable<Trabajos[]>{
      return this.httpClient.get<Trabajos[]>(this.URL + `ver`);
    }
  
    public detail(id:number) : Observable <Trabajos> {
      return this.httpClient.get<Trabajos>(this.URL + `ver/` + id);
    }
  
    public delete(id:number) : Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/` + id);
    }
  
   public save(trabajo: Trabajos) : Observable<any>{
      return this.httpClient.post<any>(this.URL + `new`, trabajo);
    }
  
    public editarTrabajo(trabajo: Trabajos) : Observable<any>{
      return this.httpClient.put<any>(this.URL + `editar/`, trabajo);
    }
  
}
