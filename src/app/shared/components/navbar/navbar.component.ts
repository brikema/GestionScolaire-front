import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User;
  authenticated:boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
     if(this.authService.isAuthenticated()){
      this.user = JSON.parse(localStorage.getItem("user")!);
      this.authenticated = true;
    }
  }


}
