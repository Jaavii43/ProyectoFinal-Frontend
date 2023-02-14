import { Component, OnInit } from '@angular/core';
import { Habilidade } from 'src/app/model/habilidade';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-sechabedit',
  templateUrl: './sechabedit.component.html',
  styleUrls: ['./sechabedit.component.css']
})
export class SechabeditComponent implements OnInit {

  habilidad: Habilidade[]=[];
  constructor(public habilidadservice:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad():void{
    this.habilidadservice.list().subscribe(data =>(this.habilidad=data))
  }

  delete(id:number){
    if(id != undefined){
      this.habilidadservice.delete(id).subscribe(
        data=>{this.cargarHabilidad();},err=>{alert("No se pudo eliminar la Habilidad")})
        }
  }   
}
