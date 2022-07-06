import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  id!:number;
  student!:Student;
  constructor(private router: Router,private route: ActivatedRoute,private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.studentService.get(this.id).subscribe((stu) => {
        this.student = stu;
      })
    });
  }

  openLinkForm() {
    this.router.navigateByUrl(`/students/${this.id}/link-course`);
  }

  openModifyForm() {
    this.router.navigateByUrl(`/students/${this.id}/modify`);
  }

  openCourseCard(id:number) {
    this.router.navigateByUrl(`/courses/${id}`);
  }

  deleteStudent(){
    this.studentService.delete(this.id).subscribe(()=> {
      this.router.navigate(["/students"]);
    });
  }

}
