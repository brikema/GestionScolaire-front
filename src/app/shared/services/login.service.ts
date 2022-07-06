import {
  HttpClient,
  HttpHeaders,
}
from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerConfig } from 'src/config/server.config';
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  private TOKEN: any;

  constructor(private http: HttpClient, private server: ServerConfig) {

  }

  login(username:string | null | undefined, password:string | null | undefined) {

      // return this.http.post<string>('/user/auth/signin', {username, password}, httpOptions)*
      return this.http.post<any>('http://13.59.222.4:8099/user-service/auth/signin', {username, password});
  }
  getToken() {
    return this.TOKEN;
  }


}
