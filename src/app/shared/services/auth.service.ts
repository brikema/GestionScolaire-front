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
  private USER!:User;


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
    this.decodeToken();
  }

  getUser(){
    return this.USER;
  }

  decodeToken(){
    try {
      let dt:any = jwt_decode(this.TOKEN);
      this.USER = new User(dt.id,dt.sub,dt.roles);
      localStorage.setItem("user",JSON.stringify(this.USER));
    } catch (error) {
      console.log(error);
    }
  }

  isAuthenticated(){
    if(localStorage.getItem("user")){
      return true;
    } else {
      return false;
    }
  
  }
  
}
