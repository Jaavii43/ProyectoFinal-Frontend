import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottonlogout',
  templateUrl: './bottonlogout.component.html',
  styleUrls: ['./bottonlogout.component.css']
})
export class BottonlogoutComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  salir() {
    if (confirm("Seguro quiere sañir del Dashboard?")) {
      
      // Esto es para que borre la info de session del cache
      window.sessionStorage.removeItem;
      this.ruta.navigate(['/intro']);
      console.log("Se carga la web principal del portfolio");
    }
}
}
