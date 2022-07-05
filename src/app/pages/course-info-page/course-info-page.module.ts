import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseInfoPageComponent } from './container/course-info-page/course-info-page.component';
import { CourseModule } from 'src/app/modules/course/course.module';



@NgModule({
  declarations: [
    CourseInfoPageComponent
  ],
  imports: [
    CommonModule,
    CourseModule
  ]
})
export class CourseInfoPageModule { }
