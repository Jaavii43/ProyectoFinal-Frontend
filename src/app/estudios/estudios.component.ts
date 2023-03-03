import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../services/educacion.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  educa: Educacion[]=[];
  
  constructor(public educacionservice:EducacionService) { }

  ngOnInit(): void {
  }

  cargarEducacion():void{
    this.educacionservice.list().subscribe(data =>(this.educa=data))
  }

}
