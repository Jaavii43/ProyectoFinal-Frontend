import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  educa: Educacion[]=[];
  
  constructor(public educacionservice:EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.educacionservice.list().subscribe(data =>(this.educa=data))
  }

}
