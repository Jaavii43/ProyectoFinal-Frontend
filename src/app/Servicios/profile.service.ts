import { Injectable } from '@angular/core';
//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
//Esto es para suscribierse y que se reciba repuesta de forma asincrona
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
//el primer htto se llama alias
  constructor( private http:HttpClient) { }

  //Metodo observable que devuelve datos
  obtenerDatos():Observable<any>{
    //Se llama al json con su ruta o una URL
    return this.http.get('./assets/data/data.json');
  }
}
