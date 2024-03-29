import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-seceduedit',
  templateUrl: './seceduedit.component.html',
  styleUrls: ['./seceduedit.component.css']
})
export class SecedueditComponent implements OnInit {

  educar: Educacion[]=[];
  
  constructor(public educacionservice:EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.educacionservice.list().subscribe(data =>(this.educar=data))
  }

  delete(id:number){    
    if (confirm("Seguro quieres borrar?")) {
    this.educacionservice.delete(id).subscribe(
      bd => {          
      },
      () => {
        alert("Se elimino la educacion")
        this.cargarEducacion()
      })
      }
    }
}
