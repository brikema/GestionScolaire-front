import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'div[app-home-page]',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--middle';
  user!: User;
  authenticated:boolean = false;
  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.user = JSON.parse(localStorage.getItem("user")!);
      this.authenticated = true;
    }
  }

  openStudentList() {
    this.router.navigateByUrl('/students');
  };

  openCourseList() {
    this.router.navigateByUrl('/courses');
  };

  openStudentNew(){
    this.router.navigateByUrl('/students/new');
  }

}
