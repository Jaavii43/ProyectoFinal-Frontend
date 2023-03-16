import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  
  url = "https://portfoliojavier.onrender.com/sobremi/"
    
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Sobremi[]> {
    return this.httpClient.get<Sobremi[]>(this.url + `ver`);
  }

  public detail(id: number): Observable<Sobremi> {
    return this.httpClient.get<Sobremi>(this.url + `ver/` + id);
  }

  public delete(id: number): Observable<Sobremi> {
    return this.httpClient.delete<Sobremi>(this.url + `delete/` + id);
  }
  
  public save(per: Sobremi): Observable<any> {
    return this.httpClient.post<any>(this.url + `new`, per);
  }


  public editarSobremi(per: Sobremi): Observable<any> {
    return this.httpClient.put<Sobremi>(this.url + `editar/`, per);
  }
}
