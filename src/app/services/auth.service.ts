import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  private http = null;
  private baseUrl = 'http://localhost:8000';
  private user = new User("","","");

  constructor(http:Http) { 
  	this.http = http;
  }

  //------------------------------------------------
  // http.get return an RxJS Observable
  getUser(id:number): Promise<User>{
    const url = this.baseUrl + `/users/${id}`;
    return this.http.get(url)
            .toPromise()
            .then(this.getmy)//rsp => rsp.json().data as User)
            .catch(this.getUserError);
  }

  getmy(rsp:any): any{
    return rsp.json().data as User;
  }

  genCSRF():Promise<string>{
    const url = this.baseUrl + `/csrf`;
    return this.http.get(url)
               .toPromise()
               .then(function(rsp){})
               .catch(this.getUserError)
  }

  login(username: string, password: string): Observable<string> {
    const url = this.baseUrl + `/login`;
    var creds = "username=" + username + "&password=" + password;
    //let headers = new Headers({ 'Content-Type': "application/json",//});
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded',//});
      'Access-Control-Allow-Origin': '*' });
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header('Access-Control-Allow-Methods: GET, POST, PUT');

    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, creds, options)//,'csrfmiddleware‌​token':'CSRF-TOKEN-V‌​ALUE'})
                    .map(function(rsp){
                      var token = rsp.json().data;
                    })
                    .catch(this.getUserError);
  }


  private getUserError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

  // createUser(body:User):Observable<User>{
  //   //let csrfToken = this.getCookie('csrftoken');
  // 	//let s = body.toPostJsonStr(csrfToken);
  //   let s = JSON.stringify(body);
  //   let headers = new Headers({ 'Content-Type': 'application/json'});//, 'X-CSRFToken':csrfToken });
  // 	let options = new RequestOptions({ 'headers': headers });

	 //  //this.http.post(this.url, s).map(this.extractData).catch(this.handleError);
  //   return this.http.post(this.url, s, options).map(res => res.json());
  // }

  // private getCookie(name: string) {
  //       let ca: Array<string> = document.cookie.split(';');
  //       let caLen: number = ca.length;
  //       let cookieName = name + "=";
  //       let c: string;

  //       for (let i: number = 0; i < caLen; i += 1) {
  //           c = ca[i].replace(/^\s\+/g, "");
  //           if (c.indexOf(cookieName) == 0) {
  //               return c.substring(cookieName.length, c.length);
  //           }
  //       }
  //       return "";
  //   }

// private getCookie(name:string) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = jQuery.trim(cookies[i]);
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }



  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body;
  // }
  
  // private handleError2 (error: Response | any) {
  //   // In a real world app, you might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }
}
