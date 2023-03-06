import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-modagrproy',
  templateUrl: './modagrproy.component.html',
  styleUrls: ['./modagrproy.component.css']
})
export class ModagrproyComponent implements OnInit {

  form:FormGroup;
  tipo:''="";
  sector:''="";
  tiempo_ejecucion:''="";
  
  constructor(private formBuilder: FormBuilder, private proyectosservice:ProyectosService) {

    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      sector: ['',[Validators.required]],
      tiempo_ejecucion: ['', [Validators.required]],
      })
      
   }

  ngOnInit(): void {
  }

  get Tipo(){
    return this.form.get("tipo");
  }

  get Sector(){
    return this.form.get("sector");
  }

  get Tiempo_ejecucion(){
    return this.form.get("tiempo_ejecucion");
  }

  onCreate():void{
    const proy =new Proyectos(this.tipo, this.sector, this.tiempo_ejecucion);
    this.proyectosservice.save(proy).subscribe(
      bd=>{
        
      }, 
        ()=>{alert("Nueva experiencia creada"); 
          this.form.reset()
          location.reload()}
        );
  }

  limpiar():void{
    this.form.reset();
  }

}
