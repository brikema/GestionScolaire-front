import { Component, Input, OnInit } from '@angular/core';
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
    private readonly _courseService: CourseService
  ) { }

  ngOnInit(): void {
    this._courseService.get(this.courseId).subscribe(
      err => console.log('HTTP Error', err),
      (result: any) => {
        this.course = result
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
