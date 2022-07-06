import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourseInfoPageComponent } from './pages/course-info-page/container/course-info-page/course-info-page.component';
import { CourseInfoPageModule } from './pages/course-info-page/course-info-page.module';
import { CourseListPageComponent } from './pages/course-list-page/container/course-list-page/course-list-page.component';
import { FourOFourPageComponent } from './pages/four-o-four-page/container/four-o-four-page/four-o-four-page.component';
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
    component: StudentListPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'students/new',
    component: StudentFormPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'students/:id',
    component: StudentInfoPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'students/:id/modify',
    component: StudentFormPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'students/:id/link-course',
    component: StudentCoursePageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'courses',
    component: CourseListPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'courses/:id',
    component: CourseInfoPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  { path: '404', component: FourOFourPageComponent },
  {
    path: '**',
    redirectTo: "/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
