import { Component, HostBinding, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'div[app-course-list-page]',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--top frame--height frame--padd';

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Gestion Scolaire - Liste des cours");
    this.meta.addTags([
      { name: 'description', content: 'Cette page contient la liste des cours qui sont ensignés sur votre plateforme Gestion Scolaire.' },
      { name: 'keywords', content: 'angular, gestion, scolaire, ecole, ensup' }  
    ]);  
  }

}
