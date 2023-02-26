import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    public authService: AuthserviceService
  ) { }

  ngOnInit(): void {
  }

}
