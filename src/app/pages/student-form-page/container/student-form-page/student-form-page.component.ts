import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-student-form-page]',
  templateUrl: './student-form-page.component.html',
  styleUrls: ['./student-form-page.component.css']
})
export class StudentFormPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
