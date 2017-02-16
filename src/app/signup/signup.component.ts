import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	username: string;
	password: string;

  constructor() {
 
  }

  onKeyUsername(val:string){
  	this.username = val;
  }

  onKeyPassword(val:string){
  	this.password = val;
  }

  ngOnInit() {

  }

}
