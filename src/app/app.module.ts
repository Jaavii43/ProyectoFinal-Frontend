import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './view/footer/footer.component';
import { SobremiComponent } from './view/sobremi/sobremi.component';
import { LoginComponent } from './modales/login/login.component';
import { RedesComponent } from './component/redes/redes.component';
import { DashboardComponent } from './edicion/dashboard.component';
import { ErrorComponent } from './view/error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BottonloginComponent } from './component/bottonlogin/bottonlogin.component';
import { BottonlogoutComponent } from './component/bottonlogout/bottonlogout.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { SobremieditComponent } from './edicion/sobremiedit/sobremiedit.component';
import { SeccioneditComponent } from './edicion/seccionedit/seccionedit.component';
import { ModeditsobremiComponent } from './edicion/modeditsobremi/modeditsobremi.component';
import { SecedueditComponent } from './edicion/seceduedit/seceduedit.component';
import { SechabeditComponent } from './edicion/sechabedit/sechabedit.component';
import { ProyectosComponent } from './view/proyectos/proyectos.component';
import { SecproeditComponent } from './edicion/secproedit/secproedit.component';
import { HabilidadesComponent } from './view/habilidades/habilidades.component';
import { TrabajosComponent } from './view/trabajos/trabajos.component';
import { EstudiosComponent } from './view/estudios/estudios.component';
import { ModagrhabComponent } from './edicion/modagrhab/modagrhab.component';
import { ModagrproyComponent } from './edicion/modagrproy/modagrproy.component';
import { ModeagrestComponent } from './edicion/modeagrest/modeagrest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SobremiService } from './services/sobremi.service';
import { InterceptorService } from './services/interceptor.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ModagretrabComponent } from './edicion/modagrtrabajo/modagretrab/modagretrab.component';
import { ModalEducacionComponent } from './edicion/modalPruebaEdicion/modal-educacion/modal-educacion.component';
import { ModalEdicionHabiComponent } from './edicion/modal-edicion-habi/modal-edicion-habi.component';
import { ModalEdicionTrabajoComponent } from './edicion/modal-edicion-trabajo/modal-edicion-trabajo.component';
import { ModaledicionproyectosComponent } from './edicion/modaledicionproyectos/modaledicionproyectos.component';
import { ModaledicionsobremiComponent } from './edicion/modaledicionsobremi/modaledicionsobremi.component';
 

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
    SecedueditComponent,
    SechabeditComponent,
    ProyectosComponent,
    SecproeditComponent,
    HabilidadesComponent,
    TrabajosComponent,
    EstudiosComponent,
    ModagrhabComponent,
    ModagrproyComponent,
    ModeagrestComponent,
    ModagretrabComponent,
    ModalEducacionComponent,
    ModalEdicionHabiComponent,
    ModalEdicionTrabajoComponent,
    ModaledicionproyectosComponent,
    ModaledicionsobremiComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
          // set defaults here
          NgCircleProgressModule.forRoot({
            // set defaults here
            "outerStrokeWidth": 12,
            "innerStrokeWidth": 8,
            "outerStrokeColor": "#4882c2", 
            "innerStrokeColor": "#d47e1c",
            "animation": true,
            "animationDuration": 800,
            "subtitleFontSize": '12',
            "subtitleColor": "#ffffff",
            "titleColor": "#ffffff",
            "unitsColor": "#ffffff", 
            "responsive": true,
            "radius": 80       
                  }),
          ],
  providers: [SobremiService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
