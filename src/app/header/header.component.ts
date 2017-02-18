import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  
    bLoggedIn = false;//($scope.token!='');


    menus = [{title:'UkraineDate', show:true, click:listing},
    				{title:'Message', show:bLoggedIn, click:message},
    				{title:'Profile', show:bLoggedIn, click:profile},
    				{title:'Login', show:!bLoggedIn, click:login},
    				{title:'Logout', show:bLoggedIn, click:logout},
    				{title:'Sign Up', show:!bLoggedIn, click:signup}];
  }

}
