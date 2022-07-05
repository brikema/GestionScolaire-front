import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-student-list-page]',
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.css']
})
export class StudentListPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
