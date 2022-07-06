import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'div[app-four-o-four-page]',
  templateUrl: './four-o-four-page.component.html',
  styleUrls: ['./four-o-four-page.component.css']
})
export class FourOFourPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor(private _title: Title, private _meta: Meta) { }

  ngOnInit(): void {
    this._title.setTitle("Gestion Scolaire - Erreur");
    this._meta.addTags([
      { name: 'description', content: 'Cette page est en erreur sur votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);  
  }

}
