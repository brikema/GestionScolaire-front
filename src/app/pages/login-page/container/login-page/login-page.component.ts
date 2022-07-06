import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import {ServerConfig} from "../../../../../config/server.config";

@Component({
  selector: 'div[app-login-page]',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  loginForm!: FormGroup;
  public TOKEN: string= "";

  constructor(private fb:FormBuilder, private authService: AuthService, private serverConfig: ServerConfig) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
        next: (value) => {
          this.authService.setToken(value.token);
          console.log(this.authService.getUser());
        },
        error : (error) => {console.log(error);}
      });
      this.loginForm.reset();
    } else {
      console.log("Erreur, formulaire incomplet ou invalide");
    }
}
}
