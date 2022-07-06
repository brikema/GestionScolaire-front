import { Component, HostBinding, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'div[app-course-info-page]',
  templateUrl: './course-info-page.component.html',
  styleUrls: ['./course-info-page.component.css']
})
export class CourseInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  public courseId: number = 0;

  constructor(private route: ActivatedRoute,
    private _title: Title, private _meta: Meta) { }

  ngOnInit(): void {

    this._title.setTitle("Gestion Scolaire - Informations cours");
    this._meta.addTags([
      { name: 'description', content: 'Cette page contient des informations sur un cours de votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]); 

    this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }

}
