import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
@Injectable()
export class Interceptor2 implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //  request = new HttpHeaders().set("taniya-token",'abcde') 
    const newConst= new HttpHeaders().set("taniya-token",'abcde') 
    //clone http to the custom AuthRequest and send it to the server 
    const AuthRequest = request.clone( { headers: newConst});
    return next.handle(AuthRequest);
   
  }
}