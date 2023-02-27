import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  
  url = "http://localhost:8080/sobremi/"
  updateSobremi:any;
  
  editSobremi() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getSobremi():Observable<Sobremi>{
    return this.http.get<Sobremi>(this.url+'traer/ver');

  }

  public verSobremi(): Observable<Sobremi[]> {
    return this.http.get<Sobremi[]>(this.url + `ver`);
  }

  public verSobremis(id: number): Observable<Sobremi> {
    return this.http.get<Sobremi>(this.url + `ver/${id}`);
  }

  public agregarSobremi(per: Sobremi): Observable<any> {
    return this.http.post<Sobremi>(this.url + `new`, per);
  }

  public eliminarSobremi(id: number): Observable<Sobremi> {
    return this.http.delete<Sobremi>(this.url + `delete/` + id);
  }
  
  public editarSobremi(per: Sobremi): Observable<any> {
    return this.http.put<Sobremi>(this.url + `editar/$`, per);
  }
}
