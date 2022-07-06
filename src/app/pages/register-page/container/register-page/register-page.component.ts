import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'div[app-register-page]',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  constructor(private _title: Title, private _meta: Meta) { }

  ngOnInit(): void {
    this._title.setTitle("Gestion Scolaire - Se créer un compte");
    this._meta.addTags([
      { name: 'description', content: 'Cette page permet de se créer un compte sur votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);  
  }

}
