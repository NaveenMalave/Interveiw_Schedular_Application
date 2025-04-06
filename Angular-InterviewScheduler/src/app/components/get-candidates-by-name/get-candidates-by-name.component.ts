import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidates } from 'src/app/models/candidates';
import { CandidatesService } from 'src/app/services/candidates.service';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'get-candidates-by-name',
  templateUrl: './get-candidates-by-name.component.html',
  styleUrls: ['./get-candidates-by-name.component.css']
})
export class GetCandidatesByNameComponent implements OnInit {
  CandidateName:string='';
  candidates:Candidates[]=[];//| null = null;

  constructor(private service : CandidatesService,private activatedRoute : ActivatedRoute, private router:Router

  ){
   
  }
  ngOnInit():void{}
  findCanName(): void{
    
      this.service.getByName(this.CandidateName).subscribe( data=>{
        this.candidates = data;
        console.log(data);
      });
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
