import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServerConfig} from "../config/server.config";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private serverConfig: ServerConfig) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let token;
    // console.log('intercepting' + this.serverConfig.TOKEN)
    if (this.serverConfig.TOKEN != "")
    {
       token =req.clone({
        setHeaders:{
          Authorization: 'Bearer ' + this.serverConfig.TOKEN
        }
      })
    }else{
      token =req.clone({
        setHeaders: {}
      })
    }
    return next.handle(token);

  }
}
