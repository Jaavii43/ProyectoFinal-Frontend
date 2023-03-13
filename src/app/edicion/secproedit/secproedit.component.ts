import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-secproedit',
  templateUrl: './secproedit.component.html',
  styleUrls: ['./secproedit.component.css']
})
export class SecproeditComponent implements OnInit {

  proy: Proyectos[]=[];
  
  constructor(public proyectosservice: ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.proyectosservice.list().subscribe(data =>(this.proy=data))
  }

  delete(id:number){    
    this.proyectosservice.delete(id).subscribe(
      bd => {          
      },
      () => {
        alert("Se elimino la educacion")
        this.cargarProyecto()
      })
      }


}
