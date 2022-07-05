import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentArray: Student[] = [];
  private readonly _isDestroy: Subject<void> = new Subject();
  constructor(
    private readonly _studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._studentService.getAll().subscribe(
      (studentList:any) => this.studentArray = studentList._embedded.students
    )
    takeUntil(this._isDestroy);
  }
  ngOnDestroy(): void {
    this._isDestroy.next();
    this._isDestroy.complete();
  }

  openStudentInfo() {
    this.router.navigateByUrl('/students/1');
  };


}
