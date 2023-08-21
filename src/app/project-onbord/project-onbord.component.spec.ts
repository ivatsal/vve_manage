import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOnbordComponent } from './project-onbord.component';

describe('ProjectOnbordComponent', () => {
  let component: ProjectOnbordComponent;
  let fixture: ComponentFixture<ProjectOnbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectOnbordComponent]
    });
    fixture = TestBed.createComponent(ProjectOnbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
