import { Component, HostBinding, OnInit } from '@angular/core';
import { concatMap, of, delay, repeat } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'div[app-home-page]',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--middle';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openStudentList() {
    this.router.navigateByUrl('/students');
  };

  openCourseList() {
    this.router.navigateByUrl('/courses');
  };

  openStudentNew(){
    this.router.navigateByUrl('/students/new');
  }

}
