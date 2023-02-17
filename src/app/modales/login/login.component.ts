import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
   constructor(private formBuilder: FormBuilder, public personaservice:PersonaService) {

    this.form = this.formBuilder.group({
      clave: ['', [Validators.required]],
      email: ['', [Validators.required]],
      })
    }

  ngOnInit(): void {
  }

}
