import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  defaultColDef = {
    sortable: true,
  };

  columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'id', filter: true, editable: true },
    { headerName: 'First Name', field: 'fname', filter: true, editable: true },
    { headerName: 'Last Name', field: 'lname', filter: true, editable: true },
    { headerName: 'Email', field: 'email', filter: true, editable: true },
    { headerName: 'Password', field: 'pswd', filter: true, editable: true },
    { headerName: 'Gender', field: 'gender', filter: true, editable: true },
    { headerName: 'DOB', field: 'bdate', filter: true, editable: true },
    { headerName: 'Role', field: 'role', filter: true, editable: true },
  ];

  // rowData = [
  // 	{ id: '101', fname:'Ronald', lname:'Johnson', pswd: 'UUUU**980*', gender: 'Male', email: 'vatsal@gmail.com', bdate:'02/09/1222', role: 'Admin'},
  // 	{ id: '205', fname:'James', lname:'Smothers', pswd: 'yyy***66',  gender: 'Female', email:'vtsl@yahoo.com', bdate:'20/08/1999', role: 'Manager'},
  // 	{ id: '505', fname:'Robin', lname:'Gillis', pswd: '9*****jbn', gender: 'Other', email: 'vtsl@yahoo.com', bdate:'10/01/1888', role: 'Member'},
  // 	{ id: '101', fname:'Ronald', lname:'Johnson', pswd: 'UUUU**980*', gender: 'Male', email: 'vatsal@gmail.com', bdate:'02/09/1222', role: 'Admin'},
  // 	{ id: '205', fname:'James', lname:'Smothers', pswd: 'yyy***66',  gender: 'Female', email:'vtsl@yahoo.com', bdate:'20/08/1999', role: 'Manager'},
  // 	{ id: '505', fname:'Robin', lname:'Gillis', pswd: '9*****jbn', gender: 'Other', email: 'vtsl@yahoo.com', bdate:'10/01/1888', role: 'Member'},
  // 	{ id: '101', fname:'Ronald', lname:'Johnson', pswd: 'UUUU**980*', gender: 'Male', email: 'vatsal@gmail.com', bdate:'02/09/1222', role: 'Admin'},
  // 	{ id: '205', fname:'James', lname:'Smothers', pswd: 'yyy***66',  gender: 'Female', email:'vtsl@yahoo.com', bdate:'20/08/1999', role: 'Manager'},
  // 	{ id: '505', fname:'Robin', lname:'Gillis', pswd: '9*****jbn', gender: 'Other', email: 'vtsl@yahoo.com', bdate:'10/01/1888', role: 'Member'},
  // 	{ id: '505', fname:'Robin', lname:'Gillis', pswd: '9*****jbn', gender: 'Other', email: 'vtsl@yahoo.com', bdate:'10/01/1888', role: 'Member'},
  // ];

  rowData: any[] = [];

  // ngOnInit() {
  //   // Retrieve user data from local storage
  //   let usersData = JSON.parse(localStorage.getItem('Users') || '[]');

  //   // Format user data for Ag-Grid
  //   this.rowData = usersData.map(
  //     (userData: {
  //       firstFormGroup: { userIdCtrl: any; firstNameCtrl: any; lastNameCtrl: any };
  //       secondFormGroup: { emailValidator: any; password: any };
  //       thirdFormGroup: { genderselected: any; dobData: any; roleselected: any };
  //     }) => ({
  //       id: userData.firstFormGroup.userIdCtrl,
  //       fname: userData.firstFormGroup.firstNameCtrl,
  //       lname: userData.firstFormGroup.lastNameCtrl,
  //       pswd: userData.secondFormGroup.password,
  //       gender: userData.thirdFormGroup.genderselected,
  //       email: userData.secondFormGroup.emailValidator,
  //       bdate: new Date(userData.thirdFormGroup.dobData).toLocaleDateString(), // Convert ISO date to formatted date
  //       role: userData.thirdFormGroup.roleselected,
  //     })
  //   );
  // }

   ngOnInit() {
    this.loadUsersFromLocalStorage();
  }

  loadUsersFromLocalStorage() {
    let usersData = JSON.parse(localStorage.getItem('Users') || '[]');
    this.rowData = usersData.map(
      (userData: {
        firstFormGroup: { userIdCtrl: any; firstNameCtrl: any; lastNameCtrl: any };
        secondFormGroup: { emailValidator: any; password: any };
        thirdFormGroup: { genderselected: any; dobData: any; roleselected: any };
      }) => ({
        id: userData.firstFormGroup.userIdCtrl,
        fname: userData.firstFormGroup.firstNameCtrl,
        lname: userData.firstFormGroup.lastNameCtrl,
        pswd: userData.secondFormGroup.password,
        gender: userData.thirdFormGroup.genderselected,
        email: userData.secondFormGroup.emailValidator,
        bdate: new Date(userData.thirdFormGroup.dobData).toLocaleDateString(),
        role: userData.thirdFormGroup.roleselected,
      })
    );
  }

  onCellValueChanged(params: any) {
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('Users', JSON.stringify(this.rowData));
  }
}
