import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sobremi } from '../../model/sobremi';
import { AutenticationService } from '../../services/autentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form: FormGroup;
  email = '';
  clave = '';
  sobremi: Sobremi = new Sobremi("", "", "", "", "","");


  constructor (private ruta: Router, private formBuilder: FormBuilder, private autService: AutenticationService) {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(8)]],
      })
  }

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', 'null');
  }

  get Email() {
    return this.form.get('email');
  }

  get Clave() {
    return this.form.get('clave');
  }

  //metodo de validacionde password
  get PasswordValid() {
    return this.Clave?.touched && !this.Clave?.valid;
  }

  //metodo de validacion de mail
  get MailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }


  onEnviar(event: Event) {  
    
    event.preventDefault;
    if (this.form.valid) {
      console.log(JSON.stringify(this.form.value));
      this.autService.loginPersona(this.form.value).subscribe(bd => {
        console.log("DATA:" + JSON.stringify(bd.id));
        
        if (bd.id) {
          alert("Ya podes editar el Portfolio");
          //window.location.reload();
          this.ruta.navigate(['/dashboard']);
        } else {
          
          alert("error al iniciar sesion");
        }

      }, error => {
        alert("E R R O R ! ! !");
      })

    } else {
      sessionStorage.setItem('currentUser', 'null');
      alert("ESTAS ERRANDO!!!");
      this.ruta.navigate(['/intro']);
    }
  }
}
