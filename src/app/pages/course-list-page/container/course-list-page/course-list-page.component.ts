import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-course-list-page]',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
