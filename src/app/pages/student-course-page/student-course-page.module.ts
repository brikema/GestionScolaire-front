import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentCoursePageComponent } from './container/student-course-page/student-course-page.component';



@NgModule({
  declarations: [
    StudentCoursePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentCoursePageModule { }
