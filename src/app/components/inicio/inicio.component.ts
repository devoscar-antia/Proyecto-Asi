import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

   transform;
   active;
        slidewhite(){
            this.transform='translateX(0)';
            this.active='0px';
        }

        slidewhite1(){
          this.transform='translateX(-25%)';
            this.active='80px';
        }

        slidewhite2(){
          this.transform='translateX(-50%)';
            this.active='160px';
        }

        slidewhite3(){
          this.transform='translateX(-75%)';
            this.active='240px';
        }

  ngOnInit(): void {
  }

}
