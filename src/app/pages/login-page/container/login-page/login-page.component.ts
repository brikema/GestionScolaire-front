import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'div[app-login-page]',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private loginService: LoginService) {
    
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
      this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: (value) => {
          console.log(value)
          //this.updateLatestArtist.emit() ;
        },
        error : (error) => {console.log(error);}
      });
      this.loginForm.reset();
    } else {
      console.log("Erreur, formulaire incomplet ou invalide");
    }
}
}
