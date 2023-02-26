import { Component, OnInit } from '@angular/core'
import { AuthserviceService } from "../services/auth/authservice.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService:AuthserviceService) { }

  ngOnInit(): void {
  }

}

