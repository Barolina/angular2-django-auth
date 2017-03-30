import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  private http = null;
  private baseUrl = 'http://localhost:8000/api';
  private url = this.baseUrl + '/users';

  constructor(http:Http) { 
  	this.http = http;
  }

  createUser(body:User){
    let csrfToken = this.getCookie('csrftoken');
  	let s = body.toPostJsonStr(csrfToken);
    let headers = new Headers({ 'Content-Type': 'application/json' });
  	//let options = new RequestOptions({ 'headers': headers });

	  this.http.post(this.url, s).map(this.extractData).catch(this.handleError);
  }

  private getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
