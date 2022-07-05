import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-login-page]',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
