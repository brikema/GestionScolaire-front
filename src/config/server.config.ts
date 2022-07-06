
import { Injectable } from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ServerConfig {


    public API_URL = "http://127.0.0.1:9999";
    public  httpOptions :any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }),
    };
  }
