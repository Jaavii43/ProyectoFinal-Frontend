import { Component, OnInit } from '@angular/core';
import { Habilidade } from '../model/habilidade';
import { HabilidadService } from '../services/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidad: Habilidade[]=[];

  constructor(public habilidadservice:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    
  }

  cargarHabilidad():void{
    this.habilidadservice.list().subscribe(data =>(this.habilidad=data))
  }

}
