import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './shared/models/user';
import { AuthService } from './shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      if(this.authService.isAuthenticated()){
        let user: User = JSON.parse(localStorage.getItem("user")!);
        if(route.url[0].path == "students"){
          if(user.roles == "ROLE_DIRECTOR"){
            return true;
          } else {
            this.router.navigate(["/"]);
            return false;
          }
        } 
        return true;    
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
  }
  
}
