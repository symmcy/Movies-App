import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  password: string = '';
  loginDetails: any;
  constructor(private router: Router, private userService:UserService) {}
  ngOnInit() {}

  Login() {
    console.log(this.loginDetails) ;
    
    this.userService.login(this.name, this.password)
    .subscribe(data => {
      this.loginDetails = data;
      if(this.loginDetails.is_success){
        localStorage.setItem('myToken', this.loginDetails.data.token);
        this.router.navigate(['/movies']);
        
        }
        else if (this.loginDetails == undefined) {
          alert ( 'hi')
        }
      
      
      
      
    });
    
  
    }

    
  }

