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

  constructor(private formBuilder: FormBuilder, public habilidadservice:HabilidadService) {
    
    this.form = this.formBuilder.group({
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
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  guardar() {
    console.log("FUNCIONA!!!")
    let hab = this.form.value;
    console.log()

    if (hab.id == '') {
      this.habilidadservice.save(hab).subscribe(
        data => {
          alert("Su nueva Educación fue añadida correctamente");
          this.cargarHabilidad();
          this.form.reset();
        }
      )
    } else {
      this.habilidadservice.editarHabilidad(hab).subscribe(
        data => {
          alert("Educación editada!!! UIHUUU!!!!");
          this.cargarHabilidad();
          this.form.reset();
        }
      )
    }
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

}
