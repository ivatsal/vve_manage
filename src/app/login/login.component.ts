import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isSubmitted: boolean = false;
  hide = true;
  user: any = {};

  firstFormGroup = this._formBuilder.group({
    userIdCtrl: ['', Validators.required],
    firstNameCtrl: ['', Validators.required],
    lastNameCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    emailValidator: ['',[ Validators.required,  Validators.pattern("[^ @]*@[^ @]*")]],
    password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
  });
  thirdFormGroup = this._formBuilder.group({
    genderselected: ['', Validators.required],
    dobData: ['', Validators.required],
    roleselected: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 870px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  selectedGenderValue: any;
  gender = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'},
  ];

  selectedRoleValue: any;
  role = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Manager', viewValue: 'Manager'},
    {value: 'Member', viewValue: 'Member'},
  ];

  clickToLogin() {
    this.isSubmitted = true;
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      this.user = this.firstFormGroup.value;
      // Fetch existing data or initialize an empty array
      let usersData = JSON.parse(localStorage.getItem('Users') || '[]');
      let userData = {
        firstFormGroup: this.user,
        secondFormGroup: this.secondFormGroup.value,
        thirdFormGroup: this.thirdFormGroup.value
      };
      usersData.push(userData);
      localStorage.setItem('Users', JSON.stringify(usersData));
      window.location.href = "/dashbord";
    } else {
      alert('Please add proper data for all form groups');
    }
  }
}
