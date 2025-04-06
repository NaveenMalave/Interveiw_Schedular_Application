import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidates } from 'src/app/models/candidates';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'get-candidates-byphone',
  templateUrl: './get-candidates-byphone.component.html',
  styleUrls: ['./get-candidates-byphone.component.css']
})
export class GetCandidatesByphoneComponent {
CandidatePhone:string='';
  candidates:Candidates[]=[];//| null = null;
  constructor(private service : CandidatesService,private activatedRoute : ActivatedRoute ){
   
  }
  ngOnInit():void{}
  findCanPhone(): void{
    
      this.service.getByPhone(this.CandidatePhone).subscribe( data=>{
        this.candidates = data;
        console.log(data);
      });
    
  }
}
