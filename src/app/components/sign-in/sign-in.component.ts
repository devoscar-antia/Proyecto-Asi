import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from "../../services/auth/authservice.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  constructor(
    public authService:AuthserviceService
  ) {
   }

  ngOnInit(): void {
    
  }

}
