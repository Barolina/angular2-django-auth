import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  providers: [AuthService],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
	
  model = new User('', '', '');
  
  constructor(private authService: AuthService) {
  }

  onSubmit(){
    //this.authService.createUser(this.model).subscribe(r=>{});
  }

  ngOnInit() {

  }

}
