import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerConfig } from 'src/config/server.config';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  API_URL: string = `${this.serverConfig.API_URL}/school-service/courses`;

  constructor(private serverConfig: ServerConfig, private http:HttpClient) { }

  getAll() : any {
    return this.http.get<Course[]>(this.API_URL);
  }

  get(id: number) : Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  getStudentsByCourse(id: number) : Observable<any> {
    return this.http.get(`${this.API_URL}/${id}/students`);
  }

  getCourseCount(): Observable<any>{
    return this.http.get(`${this.API_URL}/count/all`);
  }

  getEmptyCourseCount(): Observable<any>{
    return this.http.get(`${this.API_URL}/count/courseWithoutStudents`);
  }

  associateCourseAndStudent(studentId:number,courseId:number): Observable<any>{
    return this.http.get(`${this.API_URL}/associate/${studentId}/${courseId}`);
  }

}
