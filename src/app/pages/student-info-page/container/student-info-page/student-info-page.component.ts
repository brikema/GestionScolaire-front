import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'div[app-student-info-page]',
  templateUrl: './student-info-page.component.html',
  styleUrls: ['./student-info-page.component.css']
})
export class StudentInfoPageComponent implements OnInit {

  @HostBinding('class') class = 'frame frame--height frame--top frame--padd';

  public studentId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
    });
  }

}
