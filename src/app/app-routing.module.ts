import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListPageComponent } from './pages/course-list-page/container/course-list-page/course-list-page.component';
import { HomePageComponent } from './pages/home-page/container/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/container/login-page/login-page.component';
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
    component: HomePageComponent /* TODO */
  },
  {
    path: 'students/:id',
    component: StudentInfoPageComponent
  },
  {
    path: 'courses',
    component: CourseListPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
