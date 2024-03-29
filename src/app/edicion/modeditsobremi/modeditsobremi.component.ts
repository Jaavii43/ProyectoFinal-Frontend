import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/services/sobremi.service';

@Component({
  selector: 'app-modeditsobremi',
  templateUrl: './modeditsobremi.component.html',
  styleUrls: ['./modeditsobremi.component.css']
})
export class ModeditsobremiComponent implements OnInit {

  form: FormGroup;
  sobremi: Sobremi [] = [];
  sob: any;
  disabledValue = true;

  constructor(private formBuilder: FormBuilder, private sobremiservice: SobremiService) { 
    this.form = this.formBuilder.group({
      id:[''],
      nombre:['', [Validators.required]],
      posicion:['', [Validators.required]],
      descripcion:['', [Validators.required]],
      imagen:['', [Validators.required]],
      clave:['', [Validators.required]],
      email:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarSobremi();
  
  }

  cargarSobremi(): void {
    this.sobremiservice.list().subscribe(
      data => {
        this.sobremi = data;
      })
  }

  cargarDetalle(id: number) {
    this.sobremiservice.detail(id).subscribe(
      {
        next: (info) => {
          this.form.setValue(info);
          this.disabledValue=false;
        },
        error: (e) => {
          console.error(e)
          alert("error al cargar trabajo")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

    guardar() {
    console.log("FUNCIONA!!!")
    let sob = this.form.value;
    console.log()    
    this.sobremiservice.editarSobremi(sob).subscribe({
        next: (data) => {
        this.limpiar();
        },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      
      console.log("Se modificó correctamente el item");
      window.location.reload();
 
  }

  borrar(id: number) {
    this.sobremiservice.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarSobremi()
        },
        error => {
        alert("No se pudo eliminar")
        })
      }

  limpiar() {
    console.log("Se limpió el formulario");
    this.form.reset();
    
    }

}
