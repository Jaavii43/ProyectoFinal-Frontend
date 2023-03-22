import { Component, OnInit } from '@angular/core';
import { Trabajos } from 'src/app/model/trabajos';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-seccionedit',
  templateUrl: './seccionedit.component.html',
  styleUrls: ['./seccionedit.component.css']
})
export class SeccioneditComponent implements OnInit {

  trabajo: Trabajos[]=[];
  
  constructor(public trabajosservice: TrabajosService) { }

   ngOnInit(): void {
    this.cargarTrabajo();
    }

  cargarTrabajo():void{
    this.trabajosservice.list().subscribe(data =>(this.trabajo=data))
  }
  delete(id:number){    
    if (confirm("Seguro quieres borrar?")) {
    this.trabajosservice.delete(id).subscribe(
      bd => {          
      },
      () => {
        alert("Se elimino la experiencia laboral")
        this.cargarTrabajo()
      })
      }
    }

}
