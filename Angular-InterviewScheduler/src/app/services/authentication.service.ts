import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 
  constructor(private http:HttpClient) { }
  login(username:string,password:string){
    return this.http.post<any>('http://localhost:5129/api/Account/login',{username:username,password:password});
  }
}
