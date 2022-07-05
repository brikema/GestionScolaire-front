import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-course-info-page]',
  templateUrl: './course-info-page.component.html',
  styleUrls: ['./course-info-page.component.css']
})
export class CourseInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
