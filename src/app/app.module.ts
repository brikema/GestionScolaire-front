import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { StudentListPageModule } from './pages/student-list-page/student-list-page.module';
import { SharedModule } from './shared/shared.module';
import { CourseListPageModule } from './pages/course-list-page/course-list-page.module';
import { StudentInfoPageModule } from './pages/student-info-page/student-info-page.module';
import { LoginPageModule } from './pages/login-page/login-page.module';
import {TokenInterceptorService} from "./token-interceptor.service";
import { HomePageModule } from './pages/home-page/home-page.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HomePageModule,
    StudentListPageModule,
    CourseListPageModule,
    StudentInfoPageModule,
    ReactiveFormsModule,
    LoginPageModule,
    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AppModule { }
