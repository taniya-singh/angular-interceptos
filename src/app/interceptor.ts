import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //  request = new HttpHeaders().set("taniya-token",'abcde') 
 if(localStorage.getItem('access-token') != null) 
{
   const token =  localStorage.getItem('access-token');
// if the token is  stored in localstorage add it to http header
const headers = new HttpHeaders().set("access-token", token);
const newConst= new HttpHeaders().set("taniya-token",'abcde') 
   //clone http to the custom AuthRequest and send it to the server 
const AuthRequest = request.clone( { headers: headers});

return next.handle(AuthRequest)
   }else {
     return next.handle(request);
   }
  }
}