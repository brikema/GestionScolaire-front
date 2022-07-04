import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfosComponent } from './components/student-infos/student-infos.component';
import { StudentListComponent } from './components/student-list/student-list.component';



@NgModule({
  declarations: [
    StudentInfosComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
