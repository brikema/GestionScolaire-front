import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-student-course-page]',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})
export class StudentCoursePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
