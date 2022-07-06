import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'div[app-student-info-page]',
  templateUrl: './student-info-page.component.html',
  styleUrls: ['./student-info-page.component.css']
})
export class StudentInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  public studentId: number = 0;

  constructor(private _title: Title, private _meta: Meta
,     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._title.setTitle("Gestion Scolaire - Informations étudiant");
    this._meta.addTags([
      { name: 'description', content: 'Cette page contient des informations sur un étudiant de votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);  

    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });
  }

}
