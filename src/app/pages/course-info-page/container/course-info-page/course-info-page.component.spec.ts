import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInfoPageComponent } from './course-info-page.component';

describe('CourseInfoPageComponent', () => {
  let component: CourseInfoPageComponent;
  let fixture: ComponentFixture<CourseInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
