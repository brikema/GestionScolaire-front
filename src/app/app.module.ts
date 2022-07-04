import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './modules/course/course.module';
import { StudentModule } from './modules/student/student.module';
import { StudentListPageComponent } from './pages/student-list-page/container/student-list-page/student-list-page.component';
import { StudentListPageModule } from './pages/student-list-page/student-list-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StudentListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
