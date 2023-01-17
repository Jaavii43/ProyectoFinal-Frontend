import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../Servicios/profile.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  //Variable de instancia para almacenar los datos
  imagen:any ='';
  nombre:string ='';
  posicion:string ='';
  sobremi:any ='';


  constructor(
    //inyectar el servicio para tener acceso en la clase a los metodos
    private datosProfile:ProfileService) { }

  // Esto es para almacenar en la variable instancia los datos recuperados por el servicio  
    ngOnInit(): void {
      this.datosProfile.obtenerDatos().subscribe(datos => {
        console.log(datos); 
        this.imagen=datos.imagen;
        this.nombre=datos.name;
        this.posicion=datos.posicion;
        this.sobremi=datos.sobremi;
      });
  }

}
