import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseInfoPageComponent } from './pages/course-info-page/container/course-info-page/course-info-page.component';
import { CourseInfoPageModule } from './pages/course-info-page/course-info-page.module';
import { CourseListPageComponent } from './pages/course-list-page/container/course-list-page/course-list-page.component';
import { HomePageComponent } from './pages/home-page/container/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/container/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/container/register-page/register-page.component';
import { RegisterPageModule } from './pages/register-page/register-page.module';
import { StudentCoursePageComponent } from './pages/student-course-page/container/student-course-page/student-course-page.component';
import { StudentCoursePageModule } from './pages/student-course-page/student-course-page.module';
import { StudentFormPageComponent } from './pages/student-form-page/container/student-form-page/student-form-page.component';
import { StudentFormPageModule } from './pages/student-form-page/student-form-page.module';
import { StudentInfoPageComponent } from './pages/student-info-page/container/student-info-page/student-info-page.component';
import { StudentListPageComponent } from './pages/student-list-page/container/student-list-page/student-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'students',
    component: StudentListPageComponent
  },
  {
    path: 'students/new',
    component: StudentFormPageComponent
  },
  {
    path: 'students/:id',
    component: StudentInfoPageComponent
  },
  {
    path: 'students/:id/modify',
    component: StudentFormPageComponent
  },
  {
    path: 'students/:id/link-course',
    component: StudentCoursePageComponent
  },
  {
    path: 'courses',
    component: CourseListPageComponent
  },
  {
    path: 'courses/:id',
    component: CourseInfoPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
