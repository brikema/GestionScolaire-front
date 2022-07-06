import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    StudentListComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StudentListComponent,
    StudentCardComponent
  ]
})
export class StudentModule { }
