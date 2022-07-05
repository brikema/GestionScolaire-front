import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListPageModule } from './pages/student-list-page/student-list-page.module';
import { SharedModule } from './shared/shared.module';
import { CourseListPageModule } from './pages/course-list-page/course-list-page.module';
import { StudentInfoPageModule } from './pages/student-info-page/student-info-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StudentListPageModule,
    CourseListPageModule,
    StudentInfoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
