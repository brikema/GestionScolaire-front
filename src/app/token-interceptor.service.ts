import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ServerConfig} from "../config/server.config";
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let tokenReq;
    let token = this.authService.getToken();
    // console.log('intercepting' + this.serverConfig.TOKEN)
    if (token != "")
    {
      tokenReq =req.clone({
        setHeaders:{
          Authorization: 'Bearer ' + token
        }
      })
    }else{
      tokenReq =req.clone({
        setHeaders: {}
      })
    }
    return next.handle(tokenReq);

  }
}
