import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerConfig } from 'src/config/server.config';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  API_URL: string = `${this.serverConfig.API_URL}/courses`;

  constructor(private serverConfig: ServerConfig, private http:HttpClient) { }

  getAll() : Observable<Course[]> {
    return this.http.get<Course[]>(this.API_URL);
  }


}
