import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLinkForm() {
    this.router.navigateByUrl('/students/1/link-course');
  };

  openModifyForm() {
    this.router.navigateByUrl('/students/1/modify');
  };

  openCourseCard() {
    this.router.navigateByUrl('/courses/1');
  };

}
