import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruiter } from '../models/recruiter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
baseUrl:string='http://localhost:5129/api';
  constructor(private http:HttpClient) { }
  AddRecruiter(recruiter:any):Observable<any>{
    return this.http.post(this.baseUrl+'/ScheduleInterview',recruiter);
  }
}
