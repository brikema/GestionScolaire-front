import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ServerConfig } from 'src/config/server.config';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL: string = `${this.serverConfig.API_URL}/students`
  

  constructor(private serverConfig: ServerConfig, private http:HttpClient) { }

  getAll() : Observable<Student[]> {
    return this.http.get<Student[]>(this.API_URL);
  }

  // getAllMock() : Observable<Student[]> {
  //   response: of(Student[]) = Observable<[]
  //   this.http.get<Student[]>('./mock-student.json').pipe(
  //     map((result: any) => {
  //       result.students
  //     })
  //   );
  //   return of(response);
  // }

  create(student: Student) : Observable<Student> {
    return this.http.post<Student>(this.API_URL,student);
  }

  update(student: Student) : Observable<Student> {
    return this.http.put<Student>(`${this.API_URL}/${student.id}`,student);
  }

  delete(id: number) : Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  } 

  get(id: number) : Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  } 


}
