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

  [x: string]: any;
  form: FormGroup;
  habilidad: Habilidade []=[];


  constructor(private formBuilder: FormBuilder, public habilidadservice:HabilidadService) {

    this.form = this.formBuilder.group({
      id: [''],
      area:  ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      })
   }

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.habilidadservice.list().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.habilidadservice.detail(id).subscribe(
      {
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }


}
