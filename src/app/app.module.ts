import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentListPageModule } from './pages/student-list-page/student-list-page.module';
import { SharedModule } from './shared/shared.module';
import { CourseListPageModule } from './pages/course-list-page/course-list-page.module';
import { StudentInfoPageModule } from './pages/student-info-page/student-info-page.module';
import { LoginPageComponent } from './pages/login-page/container/login-page/login-page.component';
import { LoginPageModule } from './pages/login-page/login-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    StudentListPageModule,
    CourseListPageModule,
    StudentInfoPageModule,
    ReactiveFormsModule,
    LoginPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AppModule { }
