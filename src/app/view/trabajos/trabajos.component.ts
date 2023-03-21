import { Component, OnInit } from '@angular/core';
import { Trabajos } from 'src/app/model/trabajos';
import { TrabajosService } from 'src/app/services/trabajos.service';



@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})

export class TrabajosComponent implements OnInit {

  trabajo: Trabajos[]=[];
  
  constructor(public trabajosservice: TrabajosService) { }

  ngOnInit(): void {
    this.cargarTrabajo();
  }

  cargarTrabajo():void{
    this.trabajosservice.list().subscribe(data =>(this.trabajo=data))
  }
}
