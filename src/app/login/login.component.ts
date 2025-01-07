import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

password: any;
name: any;
constructor(private router:Router){

}
ngOninit(){

}
login(){
  if(this.name?.length >= 0 && this.password?.length >= 0){
    this.router.navigate(['/dashboard'])
   
  }
  else{
    alert("Please provide valid user name and password")
   
  }
}

}
