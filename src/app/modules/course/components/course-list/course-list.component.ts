import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseArray: Course[] = [];

  private readonly _isDestroy: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private readonly _courseService: CourseService
    ) { }

  ngOnInit(): void {
    this._courseService.getAll().subscribe(
      (courseList: any) => this.courseArray = courseList._embedded.courses
    )
    takeUntil(this._isDestroy);
  }

  ngOnDestroy(): void {
    this._isDestroy.next();
    this._isDestroy.complete();
  }

  openCourseCard(id: number | undefined) {
    this.router.navigateByUrl(`/courses/${id}`);
  };

}
