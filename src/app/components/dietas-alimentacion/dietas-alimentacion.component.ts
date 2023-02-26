import { Component, OnInit } from '@angular/core';
import{BackendService} from '../../services/comunication/backend.service';

@Component({
  selector: 'app-dietas-alimentacion',
  templateUrl: './dietas-alimentacion.component.html',
  styleUrls: ['./dietas-alimentacion.component.scss']
})

export class DietasAlimentacionComponent implements OnInit {
    desayuno:String='0';
    sdesayuno:String='';
    desayuna:1;

  

  constructor(public bservice:BackendService) { }

  ngOnInit(): void {
    var var1,var2,var3,var4,var5;
    var1=document.getElementById('button');
    var2=document.getElementById('button-1');
    var3=document.getElementById('button-2');
    var4=document.getElementById('button-3');
    var5=document.getElementById('button-4');
  }

  envioData(){
    this.sdesayuno=this.desayuno;
    console.log(this.sdesayuno);
    const desayunito={
      calorias:this.desayuna
    }
    this.bservice.datadieta(desayunito).subscribe(d=>console.log(d));
  }

 
}
