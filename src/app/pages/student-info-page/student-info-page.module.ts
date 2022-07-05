import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoPageComponent } from './container/student-info-page/student-info-page.component';
import { StudentModule } from 'src/app/modules/student/student.module';



@NgModule({
  declarations: [
    StudentInfoPageComponent
  ],
  imports: [
    CommonModule,
    StudentModule
  ]
})
export class StudentInfoPageModule { }
