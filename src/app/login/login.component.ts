import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
name: any;
password: any;
constructor(private router:Router){

}

login(){
  if(this.name?.length > 0 && this.password?.length >0){
    this.router.navigate(['/dashboard'])
  }
  else{
    alert("Please provide valid user name and password")
  }
}

}
