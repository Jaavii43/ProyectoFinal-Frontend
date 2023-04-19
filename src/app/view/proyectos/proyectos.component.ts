import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyectos[]=[];
  element = false;
  constructor(public proyectosservice:ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.proyectosservice.list().subscribe(data =>(this.proyecto=data))
  }
}
