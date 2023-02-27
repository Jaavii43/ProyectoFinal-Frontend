import { Component, OnInit } from '@angular/core';
import { Sobremi } from '../model/sobremi';
import { SobremiService } from '../services/sobremi.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  sobremi: Sobremi = new Sobremi("","","","","","");
  
  constructor(public SobremiService: SobremiService){

   }
  ngOnInit(): void {
        this.SobremiService.getSobremi().subscribe(data=>{this.sobremi=data})
      };
  }


