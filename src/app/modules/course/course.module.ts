import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseCardComponent } from './components/course-card/course-card.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent,
    CourseCardComponent
  ]
})
export class CourseModule { }
