import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajosService } from 'src/app/services/trabajos.service';
import { Trabajos } from 'src/app/model/trabajos';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent implements OnInit {

  form:FormGroup;
  empresa:''="";
  fecha_inicio:''="";
  fecha_fin:''="";
  trabajos:''="";

  constructor(private formBuilder: FormBuilder, public trabajosservice:TrabajosService) {

    this.form = this.formBuilder.group({
      empresa: ['', [Validators.required]],
      fecha_fin: [''],
      fecha_inicio: [''],
      trabajos: ['', [Validators.required]],
      })
      
   }

  ngOnInit(): void {
  }

  get Empresa(){
    return this.form.get("empresa");
  }

  get Fecha_inicio(){
    return this.form.get("fecha_fin");
  }

  get Trabajos(){
    return this.form.get("trabajos");
  }

  get Fecha_fin(){
    return this.form.get("fecha_fin");
  }

  onCreate():void{
    const trab =new Trabajos(this.empresa, this.trabajos, this.fecha_fin, this.fecha_inicio);
    this.trabajosservice.save(trab).subscribe(
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
