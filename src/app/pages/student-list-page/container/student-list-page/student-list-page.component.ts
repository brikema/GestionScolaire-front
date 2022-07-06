import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'div[app-student-list-page]',
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.css']
})
export class StudentListPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor(private _title: Title, private _meta: Meta
    ) { }

  ngOnInit(): void {
    this._title.setTitle("Gestion Scolaire - Liste des étudiants");
    this._meta.addTags([
      { name: 'description', content: 'Cette page contient la liste des étudaints qui sont ensignés sur votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);  
  }

}
