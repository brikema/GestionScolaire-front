import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public studentArray: Student[] = [];

  constructor(
    private readonly _studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._studentService.getAll().subscribe(
      (studentList: Student[]) => this.studentArray = studentList
    )
  }

  openStudentInfo() {
    this.router.navigateByUrl('/students/1');
  };


}
