import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-student-form-page]',
  templateUrl: './student-form-page.component.html',
  styleUrls: ['./student-form-page.component.css']
})
export class StudentFormPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openStudentInfo() {
    this.router.navigateByUrl('/students/1');
  };


}
