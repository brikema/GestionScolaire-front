import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-register-page]',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  constructor() { }

  ngOnInit(): void {
  }

}
