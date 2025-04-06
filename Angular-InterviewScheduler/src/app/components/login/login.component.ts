import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm?:FormGroup;
  username?:string;
  password?:string;
  ngOnInit():void{
    this.loginForm = new FormGroup({
      username:new FormControl(''),
      password: new FormControl('')
    });
    }
constructor(private authService:AuthenticationService,private router:Router){}

  login(value:{username:string,password:string}){
    this.authService.login(value.username,value.password).subscribe(data=>{
      console.log(data.token);
      localStorage.setItem('token',data.token);
      alert("Login successfull");
      this.router.navigate(['/GetByName']);
    });
  }

}
