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
  edu:any;
  
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
          alert("error al cargar educacion")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  guardar() {
    console.log("FUNCIONA!!!")
    let edu = this.form.value;
    console.log()    
    this.educacionservice.editarEducacion(edu).subscribe({
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
    this.educacionservice.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarEducacion()
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
