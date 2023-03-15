import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/services/sobremi.service';


@Component({
  selector: 'app-sobremiedit',
  templateUrl: './sobremiedit.component.html',
  styleUrls: ['./sobremiedit.component.css']
})
export class SobremieditComponent implements OnInit {

  sobremi: Sobremi[]=[];
  constructor(public sobremiservice: SobremiService) { }

  ngOnInit(): void {
      this.cargarSobremi();    
  }

  cargarSobremi():void{
    this.sobremiservice.list().subscribe(data=>{this.sobremi=data})
  }
}
