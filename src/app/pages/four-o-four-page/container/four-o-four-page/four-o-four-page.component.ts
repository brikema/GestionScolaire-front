import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'div[app-four-o-four-page]',
  templateUrl: './four-o-four-page.component.html',
  styleUrls: ['./four-o-four-page.component.css']
})
export class FourOFourPageComponent implements OnInit {
  @HostBinding('class') class = 'frame frame--top frame--height frame--middle';
  constructor() { }

  ngOnInit(): void {
  }

}
