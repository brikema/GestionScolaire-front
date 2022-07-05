import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-student-info-page]',
  templateUrl: './student-info-page.component.html',
  styleUrls: ['./student-info-page.component.css']
})
export class StudentInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
