import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-modeagrest',
  templateUrl: './modeagrest.component.html',
  styleUrls: ['./modeagrest.component.css']
})
export class ModeagrestComponent implements OnInit {

  form:FormGroup;
  fecha_inicio:''="";
  fecha_fin:''="";
  escuela:''="";
  titulo:''="";
  descripcion:''="";

  constructor(private formBuilder: FormBuilder, public educacionservice: EducacionService) { 

    this.form = this.formBuilder.group({
      escuela: ['', [Validators.required]],
      fecha_fin: [''],
      fecha_inicio: [''],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      })
      
  }

  ngOnInit(): void {
  }

  get Escuela(){
    return this.form.get("escuela");
  }

  get Fecha_inicio(){
    return this.form.get("fecha_inicio");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Fecha_fin(){
    return this.form.get("fecha_fin");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }


  onCreate():void{
    const educ =new Educacion(this.escuela, this.fecha_fin, this.fecha_inicio,  this.titulo, this.descripcion);
    this.educacionservice.save(educ).subscribe(
      data =>{
        
      }, 
        ()=>{alert("Nueva educacion creada"); 
          this.form.reset()
          location.reload()}
        );
  }

  limpiar():void{
    this.form.reset();
  }
}
