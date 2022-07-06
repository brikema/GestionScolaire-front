import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-student-course-page]',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})
export class StudentCoursePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openStudentInfo() {
    this.router.navigateByUrl('/students/1');
  };

}
