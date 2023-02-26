import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "../../services/auth/authservice.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  constructor(
    public authService:AuthserviceService
  ) { }

  ngOnInit(): void {
    var pass, pass2;

    pass = document.getElementById('userPassword');
    pass2 = document.getElementById('userPassword2');
    
    pass.onchange = pass2.onchange = verficacionpass;
    
    function verficacionpass() {
        if(pass.value == pass2.value){
            pass.setCustomValidity('las contraseña si considieron');
            pass2.setCustomValidity('las contraseña si considieron');
          }else{
            alert("las contraseña no coincidieron");
          }
        
    }
  }
}
