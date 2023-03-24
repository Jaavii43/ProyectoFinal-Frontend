import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidade } from 'src/app/model/habilidade';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-edicion-habi',
  templateUrl: './modal-edicion-habi.component.html',
  styleUrls: ['./modal-edicion-habi.component.css']
})
export class ModalEdicionHabiComponent {

  form: FormGroup;
  habilidades:Habilidade[] = [];
  disabledValue = true;

  constructor(private formBuilder: FormBuilder, public habilidadservice:HabilidadService) {
    
    this.form = this.formBuilder.group({
      id:[''],
      area: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      })
   }

   ngOnInit(): void {
    this.cargarHabilidad();
  }
   
   cargarHabilidad(): void {
    this.habilidadservice.list().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.habilidadservice.detail(id).subscribe(
      {
        next: (info) => {
          this.form.setValue(info);
          this.disabledValue=false;
        },
        error: (e) => {
          console.error(e)
          alert("error al cargar Habilidad")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  guardar() {
    console.log("FUNCIONA!!!")
    let hab = this.form.value;
    console.log()

      this.habilidadservice.editarHabilidad(hab).subscribe({
        next: (data) => {
       this.limpiar();
        },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      window.location.reload();
      console.log("Se modificó correctamente el item");
    }
  

  borrar(id: number) {
    this.habilidadservice.delete(id).subscribe(
      data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarHabilidad();
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
