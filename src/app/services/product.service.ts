import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Product } from '../models/product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private baseUrl = 'http://localhost:8000/api';
  private url = this.baseUrl + '/products';
  private http = null;

  constructor(http:Http) { 
  	this.http = http;
  }

  getProducts():Observable<Product[]>{
  	return this.http.get(this.url)//.toPromise()
  		.map(this.extractData)
  		.catch(this.handleError);
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