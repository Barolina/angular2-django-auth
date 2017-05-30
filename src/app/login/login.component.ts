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
  user = new User("SSS", "DDD", "");
  token = '';

  constructor(private authService: AuthService) { 
  	
  }

  ngOnInit(): void{
  	this.authService.genCSRF().subscribe(
        token => this.token = token
      );
  }

  getUser(id:number): void{
  	this.authService.getUser(id).then(user => this.user = user);
  }

  onSubmit(): void{
    var user = this.user;

    //this.authService.login(user.username, user.password);
    this.authService.login('chen', 'chen').subscribe(
        token => this.token = token
      );
    console.log("submit login");
  }
}
