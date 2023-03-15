import { Component, OnInit } from '@angular/core';
import { Sobremi } from '../model/sobremi';
import { SobremiService } from '../services/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  sobremi: Sobremi[]=[];
  
  constructor(public sobremiService: SobremiService){

   }
  ngOnInit(): void {
      this.cargarSobremi(); 
      }
      
  cargarSobremi():void{
      this.sobremiService.list().subscribe(data=>{this.sobremi=data})
  }

}


