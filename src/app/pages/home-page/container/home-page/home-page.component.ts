import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CourseService } from 'src/app/modules/course/services/course.service';
import { StudentService } from 'src/app/modules/student/services/student.service';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'div[app-home-page]',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--middle';

  public user!: User;
  public authenticated: boolean = false;

  public courseCount: number = 0;
  public emptyCourseCount: number = 0;
  public studentCount: number = 0;
  public emptyStudentCount: number = 0;

  private readonly _isDestroy: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private _authService: AuthService,
    private _courseService: CourseService,
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
    if (this._authService.isAuthenticated()) {
      this.user = JSON.parse(localStorage.getItem("user")!);
      this.authenticated = true;
      takeUntil(this._isDestroy);
      this._courseService.getCourseCount().subscribe(
        {
          next: (value: number) => {
            this.courseCount = value;
            takeUntil(this._isDestroy);
          }
        }
      )
      this._courseService.getEmptyCourseCount().subscribe(
        {
          next: (value: number) => {
            this.emptyCourseCount = value;
            takeUntil(this._isDestroy);
          }
        }
      )
      this._studentService.getStudentCount().subscribe(
        {
          next: (value: number) => {
            this.studentCount = value;
            takeUntil(this._isDestroy);
          }
        }
      )

      this._studentService.getEmptyStudentCount().subscribe(
        {
          next: (value: number) => {
            this.emptyStudentCount = value;
            takeUntil(this._isDestroy);
          }
        }
      )


    }


  }

  ngOnDestroy(): void {
    this._isDestroy.next();
    this._isDestroy.complete();
  }

  openStudentList() {
    this.router.navigateByUrl('/students');
  };

  openCourseList() {
    this.router.navigateByUrl('/courses');
  };

  openStudentNew() {
    this.router.navigateByUrl('/students/new');
  }

}
