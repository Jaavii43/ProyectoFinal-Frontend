import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  url="http://localhost:8080/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  loginPersona(credenciales:any): Observable<any>{
    var httpOptions={headers:new HttpHeaders({
      'Content-Type':'application/json'
    })}
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(bd => {
    sessionStorage.setItem('currentUser',JSON.stringify(bd));
    this.currentUserSubject.next(bd);
    console.log("Servicio esta corriendo" + JSON.stringify(bd));
    return bd
    }));
  }

  get usuarioAutenticado(){  
    return this.currentUserSubject.value;
  }
}
