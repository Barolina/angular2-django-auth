import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  providers: [AuthService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //private user: User;
  user = new User("my name", "my pass", "my email");
  
  constructor(private authService: AuthService) { 
  	
  }

  ngOnInit(): void{
  	//this.getUser(0);
  }

  getUser(id:number): void{
  	this.authService.getUser(id).then(user => this.user = user);
  }

  onSubmit(): void{
    this.getUser(0);
    console.log("submit login");
  }
}
