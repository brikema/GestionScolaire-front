import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ServerConfig } from 'src/config/server.config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private server: ServerConfig, private router: Router) {

  }

  login(username:string | null | undefined, password:string | null | undefined) {
      return this.http.post<any>(`/user/auth/signin`, {username, password});
  }

  setToken(token: string) {
    localStorage.setItem("token", token);
    this.decodeToken(token);
  }


  decodeToken(token: string) {
    try {
      let dt: any = jwt_decode(token);
      let user: User = new User(dt.id, dt.sub, dt.roles);
      localStorage.setItem("user", JSON.stringify(user));
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

  disconnect() {
    localStorage.clear();
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
    });
  }

}
