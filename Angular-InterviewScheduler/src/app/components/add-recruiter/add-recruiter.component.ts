import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Recruiter } from 'src/app/models/recruiter';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { Time } from '@angular/common';
@Component({
  selector: 'add-recruiter',
  templateUrl: './add-recruiter.component.html',
  styleUrls: ['./add-recruiter.component.css']
})
export class AddRecruiterComponent {
recruiter?:Recruiter;
constructor(private service: RecruiterService,private router: Router){
    this.recruiter=new Recruiter(0, new Date(), { hours: 0, minutes: 0 }, 0, '', '', '', '', '', '', '', 0);

}
addRec(){
this.service.AddRecruiter(this.recruiter).subscribe(data=>{
  alert(data.msg);
  console.log('recruiter added',data);
})
}
}
