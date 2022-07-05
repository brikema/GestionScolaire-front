import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListPageComponent } from './container/course-list-page/course-list-page.component';
import { CourseModule } from 'src/app/modules/course/course.module';



@NgModule({
  declarations: [
    CourseListPageComponent
  ],
  imports: [
    CommonModule,
    CourseModule
  ]
})
export class CourseListPageModule { }
