import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trabajos } from 'src/app/model/trabajos';
import { TrabajosService } from 'src/app/services/trabajos.service';

@Component({
  selector: 'app-modal-edicion-trabajo',
  templateUrl: './modal-edicion-trabajo.component.html',
  styleUrls: ['./modal-edicion-trabajo.component.css']
})
export class ModalEdicionTrabajoComponent {

  form: FormGroup;
  trabajos: Trabajos [] = [];
  tra:any;
  disabledValue = true;
  
  constructor(private formBuilder: FormBuilder, private trabajosservice: TrabajosService){
    
    this.form = this.formBuilder.group({
      id:[''],
      empresa: ['', [Validators.required]],
      fecha_fin: [''],
      fecha_inicio: [''],
      trabajo: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.cargarTrabajo();
  }
  
  cargarTrabajo(): void {
    this.trabajosservice.list().subscribe(
      data => {
        this.trabajos = data;
      })
  }

  cargarDetalle(id: number) {
    this.trabajosservice.detail(id).subscribe(
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
    let tra = this.form.value;
    console.log()    
    this.trabajosservice.editarTrabajo(tra).subscribe({
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
    this.trabajosservice.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarTrabajo()
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
