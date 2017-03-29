import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	model = new User('', '', '', '');
  constructor() {
 
  }

  onSubmit(){

  }
  
  ngOnInit() {

  }

}
