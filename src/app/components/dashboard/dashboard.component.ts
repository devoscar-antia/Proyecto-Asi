import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  request;
  constructor(
    public authService: AuthserviceService,
    public httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.request={'saludo':'Presioname'};
  }

  comunicacion(){
    this.httpClient.get('http://127.0.0.1:8000/primera').subscribe((res)=>{
      this.request=res;
    });
  }
}
