
import { Injectable } from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ServerConfig {


    //public API_URL = "http://18.216.190.197:8099";
    public API_URL = "http://13.59.222.4:8099";
    public TOKEN = "";
    public  httpOptions :any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }),
    };
  }
