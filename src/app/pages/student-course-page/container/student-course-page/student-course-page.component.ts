import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Course } from 'src/app/modules/course/models/course';
import { CourseService } from 'src/app/modules/course/services/course.service';
import { Student } from 'src/app/modules/student/models/student';
import { StudentService } from 'src/app/modules/student/services/student.service';

@Component({
  selector: 'div[app-student-course-page]',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})
export class StudentCoursePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  public id!:number;
  public student!:Student;
  public courseArray: Course[] = [];
  public selectedCourse:number = 0;
  private readonly _isDestroy: Subject<void> = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _studentService: StudentService,
    private _courseService: CourseService,
    private _title: Title, private _meta: Meta) { }

  ngOnInit(): void {
    this._title.setTitle("Gestion Scolaire - Associer un cours à un étudiant");
    this._meta.addTags([
      { name: 'description', content: 'Cette page permet de modifier un étudiant sur votre Plateforme Gestion Scolaire en lui associant un cours.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);   

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this._studentService.get(this.id).subscribe((stu) => {
          this.student = stu;
        })
        this._courseService.getAll().subscribe(
          {
            next: (courseList: any) => {
              let cArray = courseList._embedded.courses;
              this._studentService.getStudentCourses(this.id).subscribe({
                next:(courseListLinked) => {
                    let cArrayBis = courseListLinked._embedded.courses;
                    this.courseArray = cArray.filter((id1:Course) => !cArrayBis.some((id2:Course) => id2.id === id1.id));
                }
              })
            }
          }
        );
      }
      takeUntil(this._isDestroy);
    });
  }

  ngOnDestroy(): void {
    this._isDestroy.next();
    this._isDestroy.complete();
  }

  associateCourse(){
    this._courseService.associateCourseAndStudent(this.id,this.selectedCourse).subscribe(()=> {
      this.openStudentInfo();
    })
  }

  openStudentInfo() {
    this.router.navigateByUrl(`/students/${this.id}`);
  }

}
