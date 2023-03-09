import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {

  form: FormGroup;
  educaciones: Educacion[] = [];
  
  constructor(private formBuilder: FormBuilder, private educacionservice: EducacionService){
    
    this.form = this.formBuilder.group({
      id:[''],
      escuela: ['', [Validators.required]],
      fecha_fin: [''],
      fecha_inicio: [''],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      })

  }
  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.educacionservice.list().subscribe(
      data => {
        this.educaciones = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.educacionservice.detail(id).subscribe(
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
    let edu = this.form.value;
    console.log()

    if (edu.id == '') {
      this.educacionservice.save(edu).subscribe(
        data => {
          alert("Su nueva Educación fue añadida correctamente");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    } else {
      this.educacionservice.editarEducacion(edu).subscribe(
        data => {
          alert("Educación editada!!! UIHUUU!!!!");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.educacionservice.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarEducacion()
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
}
