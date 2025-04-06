import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidates } from 'src/app/models/candidates';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'get-candidates-byemail',
  templateUrl: './get-candidates-byemail.component.html',
  styleUrls: ['./get-candidates-byemail.component.css']
})
export class GetCandidatesByemailComponent {
CandidateEmail:string='';
  candidates:Candidates[]=[];//| null = null;
  constructor(private service : CandidatesService,private activatedRoute : ActivatedRoute ){
   
  }
  ngOnInit():void{}
  findCanEmail(): void{
    
      this.service.getByEmail(this.CandidateEmail).subscribe( data=>{
        this.candidates = data;
        console.log(data);
      });
    
  }
}
