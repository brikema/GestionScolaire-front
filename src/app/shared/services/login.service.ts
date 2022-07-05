import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerConfig } from 'src/config/server.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private server: ServerConfig) {
    
  }
    
  login(username:string | null | undefined, password:string | null | undefined) {
    
      return this.http.post<string>(this.server.API_URL + '/user-service/auth/signin', {username, password}, httpOptions)
  }
}
