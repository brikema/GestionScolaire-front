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
  public TOKEN: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
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
          error: (error) => { console.log(error); }
        });
      this.loginForm.reset();
    } else {
      console.log("Erreur, formulaire incomplet ou invalide");
    }
  }
}
