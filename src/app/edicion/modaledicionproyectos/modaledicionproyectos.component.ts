import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-modaledicionproyectos',
  templateUrl: './modaledicionproyectos.component.html',
  styleUrls: ['./modaledicionproyectos.component.css']
})
export class ModaledicionproyectosComponent {

  form: FormGroup;
  proyectos: Proyectos[] = [];
  proy:any;
  
  constructor(private formBuilder: FormBuilder, private proyectoservice: ProyectosService){
    
    this.form = this.formBuilder.group({
      id:[''],
      sector: ['', [Validators.required]],
      tiempo_ejecucion:['', [Validators.required]],
      tipo:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.proyectoservice.list().subscribe(
      data => {
        this.proyectos = data;
      })
  }

  cargarDetalle(id: number) {
    this.proyectoservice.detail(id).subscribe(
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
    let proy = this.form.value;
    console.log()    
    this.proyectoservice.editarProyectos(proy).subscribe({
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
    this.proyectoservice.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarProyecto()
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
