import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'div[app-login-page]',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  loginForm!: FormGroup;
  error: string | undefined;
  submitted:boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.get('username')!.valueChanges.subscribe(() => {
      this.error = undefined;
    });
  }

  get f() { return this.loginForm.controls; }



  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password,)
        .subscribe({
          next: (value) => {
            this.authService.setToken(value.token);
            this.router.navigate(['/'])
              .then(() => {
                window.location.reload();
              });
          },
          error: (error) => { 
            switch (error.status) {
              case 403:
                  this.error = "Identifiant ou mot de passe invalide.";
                break;
              default:
                this.error = "Une erreur inconnue est survenue.";
                break;
            }
          }
        });
      this.loginForm.reset();
    } 
  }
}
