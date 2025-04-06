import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidates } from '../models/candidates';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  baseUrl:string = 'http://localhost:5129/api';
  constructor(private http:HttpClient) { }
   
    AddCandidate(candidates:any):Observable<any>{
      return this.http.post(this.baseUrl+'/CandidateInput/AddCandidate/',candidates);
    } 
    getByName(candidateName:string):Observable<Candidates[]>{
      let token=localStorage.getItem("token");
      return this.http.get<Candidates[]>(this.baseUrl+'/GetCandidate/GetByName/'+candidateName,{
        headers:{
          "Authorization":"Bearer "+token
        }
      });
    }
    getByEmail(emailId:string):Observable<Candidates[]>{
      return this.http.get<Candidates[]>(this.baseUrl+'/GetCandidate/GetByEmail/'+emailId);
    }
    getByPhone(phone:string):Observable<Candidates[]>{
      return this.http.get<Candidates[]>(this.baseUrl+'/GetCandidate/GetByPhone/'+phone);
    }
    
   
}
