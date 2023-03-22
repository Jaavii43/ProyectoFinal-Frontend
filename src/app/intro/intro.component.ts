import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {    
    //Pongo este metodo aca para que borre los datos de inicio de seccion
    this.salir();    
  }

  salir() {    
      // Esto es para que borre la info de session del cache
      window.sessionStorage.clear();
      console.log("Se cerro seccion de dashboard");       
  }

}
