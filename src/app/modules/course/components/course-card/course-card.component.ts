import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() courseId: number = 0;

  public course: Course = new Course;
  public numberOfStudents: number = 0;
  private readonly _isDestroy: Subject<void> = new Subject();

  constructor(
    private readonly _courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._courseService.get(this.courseId).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (error) => {
        this.router.navigate(["/404"]);
      }
    }

    )
    takeUntil(this._isDestroy);

    this._courseService.getStudentsByCourse(this.courseId).subscribe(
      (result: any) => {
        this.numberOfStudents = result._embedded.students.length
      }
    )
    takeUntil(this._isDestroy);
  }

  ngOnDestroy(): void {
    this._isDestroy.next();
    this._isDestroy.complete();
  }

}
