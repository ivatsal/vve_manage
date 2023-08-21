import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project-onbord',
  templateUrl: './project-onbord.component.html',
  styleUrls: ['./project-onbord.component.scss']
})
export class ProjectOnbordComponent {
  isSubmitted: boolean = false;
  projects: any = {};
  hide = true;

  firstFormGroup = this._formBuilder.group({
    projectIdCtrl: ['', Validators.required],
    projectTitleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    managerId: ['', Validators.required],
    memberId: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    budgetselected: ['', Validators.required],
    statusselected: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  selectedstatusValue: any;
  status = [
    {value: 'Pending', viewValue: 'Pending'},
    {value: 'Review', viewValue: 'Review'},
    {value: 'Completed', viewValue: 'Completed'},
  ];

  projectCreate() {
    this.isSubmitted = true;
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      this.projects = this.firstFormGroup.value;
      let usersData = JSON.parse(localStorage.getItem('Project') || '[]');
      let userData = {
        firstFormGroup: this.projects,
        secondFormGroup: this.secondFormGroup.value,
        thirdFormGroup: this.thirdFormGroup.value
      };
      usersData.push(userData);
      localStorage.setItem('Project', JSON.stringify(usersData));
      window.location.href = "/dashbord";
    } else {
      alert('Please add proper data for all form groups');
    }
  }
}
