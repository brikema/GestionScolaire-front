import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'div[app-course-info-page]',
  templateUrl: './course-info-page.component.html',
  styleUrls: ['./course-info-page.component.css']
})
export class CourseInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  private _routeSub!: Subscription;
  public courseId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._routeSub = this.route.params.subscribe(params => {
      this.courseId = params['id'];
    });
  }

}
