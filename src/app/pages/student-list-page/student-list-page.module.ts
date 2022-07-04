import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListPageComponent } from './container/student-list-page/student-list-page.component';
import { StudentModule } from 'src/app/modules/student/student.module';



@NgModule({
  declarations: [
    StudentListPageComponent
  ],
  imports: [
    CommonModule,
    StudentModule
  ]
})
export class StudentListPageModule { }
