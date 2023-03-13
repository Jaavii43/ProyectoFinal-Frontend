import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/services/sobremi.service';


@Component({
  selector: 'app-sobremiedit',
  templateUrl: './sobremiedit.component.html',
  styleUrls: ['./sobremiedit.component.css']
})
export class SobremieditComponent implements OnInit {

  sobremi: Sobremi = new Sobremi("","","","","","");

  constructor(public sobremiservice: SobremiService) { }

  ngOnInit(): void {

    this.sobremiservice.getSobremi().subscribe(data=>{this.sobremi=data})
  }

}
