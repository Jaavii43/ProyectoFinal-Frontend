import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajos } from '../model/trabajos';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  URL = "http://localhost:8080/trabajos/"

  constructor(private httpClient:HttpClient) { }
    
    public list():Observable<Trabajos[]>{
      return this.httpClient.get<Trabajos[]>(this.URL + `ver`);
    }
  
    public detail(id:number) : Observable <Trabajos> {
      return this.httpClient.get<Trabajos>(this.URL + `traer/${id}`);
    }
  
    public delete(id:number) : Observable<any>{
      return this.httpClient.delete<any>(this.URL + `delete/` + id);
    }
  
   public save(trabajo: Trabajos) : Observable<any>{
      return this.httpClient.post<any>(this.URL + `new`, trabajo);
    }
  
    public update(id:number, trabajo: Trabajos) : Observable<any>{
      return this.httpClient.put<any>(this.URL + `editar/${id}`, trabajo);
    }
  
}
