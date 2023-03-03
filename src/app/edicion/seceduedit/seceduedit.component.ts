import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-seceduedit',
  templateUrl: './seceduedit.component.html',
  styleUrls: ['./seceduedit.component.css']
})
export class SecedueditComponent implements OnInit {

  educa: Educacion[]=[];
  
  constructor(public educacionservice:EducacionService) { }

  ngOnInit(): void {
  }

  cargarEducacion():void{
    this.educacionservice.list().subscribe(data =>(this.educa=data))
  }

  delete(id:number){    
    this.educacionservice.delete(id).subscribe(
      bd => {          
      },
      () => {
        alert("Se elimino la Habilidad")
        this.cargarEducacion()
      })
      }

}
