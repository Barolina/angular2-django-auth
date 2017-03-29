import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private http = null;
  private baseUrl = 'http://localhost:8000/api';
  private url = this.baseUrl + '/users';

  constructor(http:Http) { 
  	this.http = http;
  }

  createUser(body:Object){
  	let s = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ 'headers': headers });

	this.http.post(this.url, s, options).map(this.extractData).catch(this.handleError);
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
