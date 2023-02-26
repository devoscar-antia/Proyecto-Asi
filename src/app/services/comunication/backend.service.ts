import { Injectable , NgZone} from '@angular/core';
import { Router } from "@angular/router";
import {Desayuno} from '../../interfaces/desayuno';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private httpClient: HttpClient, public router : Router, public ngZone: NgZone) {}
  httpHeaders: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });
  private url: string='http://127.0.0.1:8000/primera/postdieta';
  datadieta(desayuno:Desayuno):Observable<Desayuno>{
    return this.httpClient.post<Desayuno>(this.url,desayuno,{headers:this.httpHeaders});

  }
}
