import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptorService} from "../../token-interceptor.service";



@NgModule({
  declarations: [
    StudentListComponent,
    StudentCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentListComponent,
    StudentCardComponent
  ]
})
export class StudentModule { }
