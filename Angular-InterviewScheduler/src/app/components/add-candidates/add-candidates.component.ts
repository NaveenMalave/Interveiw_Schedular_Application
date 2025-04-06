import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Candidates } from 'src/app/models/candidates';
import { CandidatesService } from 'src/app/services/candidates.service';

@Component({
  selector: 'add-candidates',
  templateUrl: './add-candidates.component.html',
  styleUrls: ['./add-candidates.component.css']
})
export class AddCandidatesComponent {
Candidates?:Candidates={
  candidateid:0,
  candidateName:'',
  emailId:'',
  phone:'',
  
};
selectedFile:File |null=null;

constructor(private service:CandidatesService,private router:Router){
  // this.Candidates = new Candidates(0,'','','',{} as File);
}
onFileSelected(event:any){
  const file:File = event.target.files[0];
  if(file){
    this.selectedFile=file;
   
  }
}
AddCandidate():void{
 const formData: any = new FormData();
 formData.append('candidateid',this.Candidates?.candidateid);
  formData.append('candidateName',this.Candidates?.candidateName);
  formData.append('emailId',this.Candidates?.emailId);
  formData.append('phone',this.Candidates?.phone);

  console.log(formData);

if(this.selectedFile){
  formData.append('resumefile',this.selectedFile);
}
  this.service.AddCandidate(formData).subscribe(data=>{
    console.log('candidtate added:',data);
    alert(data.msg);
    
  },
error =>{
  console.error('error adding employee',error);
});
}
}
