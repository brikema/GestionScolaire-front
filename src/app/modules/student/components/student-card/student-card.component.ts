import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() studentId: number = 0;
  student!:Student;
  loading:boolean = true;
  constructor(private router: Router,private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.get(this.studentId).subscribe((stu) => {
      this.student = stu;
      this.loading = false;
      console.log(this.loading);
    });
  }

  openLinkForm() {
    this.router.navigateByUrl(`/students/${this.studentId}/link-course`);
  }

  openModifyForm() {
    this.router.navigateByUrl(`/students/${this.studentId}/modify`);
  }

  openCourseCard(id:number) {
    this.router.navigateByUrl(`/courses/${id}`);
  }

  deleteStudent(){
    this.studentService.delete(this.studentId).subscribe(()=> {
      this.router.navigate(["/students"]);
    });
  }

}
