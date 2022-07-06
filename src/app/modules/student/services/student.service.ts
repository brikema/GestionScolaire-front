import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ServerConfig } from 'src/config/server.config';
import { Student } from '../models/student';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import { response } from 'express';
import {TokenInterceptorService} from "../../../token-interceptor.service";



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // API_URL: string = `/school/students`
  API_URL: string = `${this.serverConfig.API_URL}/school-service/students`
  private studentArray: Student[] = [];

  constructor(private serverConfig: ServerConfig, private http:HttpClient,private tokenInterceptorService:TokenInterceptorService) { }

   getAll() : any {
     return this.http.get<any>(this.API_URL);
   }

  create(student: Student) : Observable<HttpEvent<Student>> {
    return this.http.post<Student>(this.API_URL,student,this.serverConfig.httpOptions);
  }

  update(student: Student) : Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}/${student.id}`,this.serverConfig.httpOptions);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  get(id: number) : Observable<Student> {
    return this.http.get<Student>(`${this.API_URL}/${id}`);
  }

  getStudentCount(): Observable<any>{
    return this.http.get(`${this.API_URL}/count/all`);
  }

  getEmptyStudentCount(): Observable<any>{
    return this.http.get(`${this.API_URL}/studentWithoutCourse`);
  }


}
