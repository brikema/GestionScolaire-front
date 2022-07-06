import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormPageComponent } from './container/student-form-page/student-form-page.component';



@NgModule({
  declarations: [
    StudentFormPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentFormPageModule { }
