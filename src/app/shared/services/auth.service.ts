import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ServerConfig } from 'src/config/server.config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN:string = "";
  private USER:User | undefined;


  constructor(private http: HttpClient, private server: ServerConfig) {

  }

  login(username:string | null | undefined, password:string | null | undefined) {

      return this.http.post<any>(`${this.server.API_URL}/user-service/auth/signin`, {username, password});
  }
  getToken() {
    return this.TOKEN;
  }

  setToken(token:string){
    this.TOKEN = token;
  }

  getUser(){
    this.decodeToken();
    return this.USER;
  }

  decodeToken(){
    try {
      let dt:any = jwt_decode(this.TOKEN);
      console.log(dt);
      this.USER = new User(dt.id,dt.sub,dt.roles);

    } catch (error) {
      console.log(error);
    }
  }
  
}
