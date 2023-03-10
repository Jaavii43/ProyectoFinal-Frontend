import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidade } from 'src/app/model/habilidade';
import { HabilidadService } from 'src/app/services/habilidad.service';


@Component({
  selector: 'app-modagrhab',
  templateUrl: './modagrhab.component.html',
  styleUrls: ['./modagrhab.component.css']
})
export class ModagrhabComponent implements OnInit {

  form: FormGroup;
  area: '' = "";
  porcentaje: any;
  


  constructor(private formBuilder: FormBuilder, public habilidadservice:HabilidadService) {
    
    this.form = this.formBuilder.group({
      area: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      })
      
    
   
    }

  ngOnInit(): void {
    
  }

  get Habilidad(){
    return this.form.get("area");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  get HabilidadValid(){
    return this.Habilidad?.touched && !this.Habilidad.valid;
  }

  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }

  onCreate():void{
    const habi =new Habilidade(this.area, this.porcentaje);
    this.habilidadservice.save(habi).subscribe(
      bd=>{
        
      }, 
        ()=>{alert("Habilidad creada"); 
          this.form.reset()
          location.reload()}
        );
  }

  limpiar():void{
    this.form.reset();
  }

  
}
