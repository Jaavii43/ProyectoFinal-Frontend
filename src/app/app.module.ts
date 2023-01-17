import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from './edicion/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BottonloginComponent } from './bottonlogin/bottonlogin.component';
import { BottonlogoutComponent } from './bottonlogout/bottonlogout.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { SobremieditComponent } from './edicion/sobremiedit/sobremiedit/sobremiedit.component';
import { SeccioneditComponent } from './edicion/seccionedit/seccionedit.component';
import { ModeditsobremiComponent } from './edicion/modeditsobremi/modeditsobremi.component';
import { BotonesedicionComponent } from './edicion/botonesedicion/botonesedicion.component';
import { SecedueditComponent } from './edicion/seceduedit/seceduedit.component';
import { SechabeditComponent } from './edicion/sechabedit/sechabedit.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SecproeditComponent } from './edicion/secproedit/secproedit.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { BotonagregarComponent } from './edicion/botonagregar/botonagregar.component';
import { AgregarTrabajoComponent } from './edicion/modeditra/agregar-trabajo.component';
import { BotagrtrabajoComponent } from './edicion/botonagregartrabajo/botagrtrabajo/botagrtrabajo.component';
import { ModagrhabComponent } from './edicion/modagrhab/modagrhab.component';
import { ModagrproyComponent } from './edicion/modagrproy/modagrproy.component';
import { ModeagrestComponent } from './edicion/modeagrest/modeagrest.component';
import { BotonagregarproyComponent } from './edicion/botonagregarproy/botonagregarproy.component';
import { BotonagrhabComponent } from './edicion/botonagrhab/botonagrhab.component';

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SobremiComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    BottonloginComponent,
    BottonlogoutComponent,
    NavbardashboardComponent,
    SobremieditComponent,
    SeccioneditComponent,
    ModeditsobremiComponent,
    BotonesedicionComponent,
    SecedueditComponent,
    SechabeditComponent,
    ProyectosComponent,
    SecproeditComponent,
    HabilidadesComponent,
    TrabajosComponent,
    EstudiosComponent,
    BotonagregarComponent,
    AgregarTrabajoComponent,
    BotagrtrabajoComponent,
    ModagrhabComponent,
    ModagrproyComponent,
    ModeagrestComponent,
    BotonagregarproyComponent,
    BotonagrhabComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
