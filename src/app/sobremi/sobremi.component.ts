import { Component, OnInit } from '@angular/core';
import { Sobremi } from '../model/sobremi';
import { SobremiService } from '../services/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  sobremi: Sobremi = new Sobremi("","","");
  
  constructor(public SobremiService: SobremiService)
    //inyectar el servicio para tener acceso en la clase a los metodos

    { }

  // Esto es para almacenar en la variable instancia los datos recuperados por el servicio  
    ngOnInit(): void {

      };
  }

}
