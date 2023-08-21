import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CurrencyPipe } from '../currency.pipe';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.scss'],
  providers: [CurrencyPipe]
})
export class ProjectDataComponent {
	
	constructor(private currencyPipe: CurrencyPipe) {}

	defaultColDef = {
		sortable: true
	};
  
	columnDefs: ColDef[]  = [
		{headerName: 'ID', field: 'id', filter: true},
		{headerName: 'Title', field: 'title', filter: true },
		{headerName: 'Description', field: 'description', filter: true},
		{headerName: 'Manager ID', field: 'managerId', filter: true},
		{headerName: 'Member ID', field: 'memberId', filter: true},
		{headerName: 'Budget', field: 'budget', filter: true},
		{headerName: 'Status', field: 'status', filter: true, editable: true},
		{headerName: 'Created Date', field: 'createdDate', filter: true, editable: true},
		{headerName: 'Completed Date', field: 'completedDate', filter: true, editable: true}
	];

	// rowData = [
	// 	{ id: '101', title:'project-v', description:'lorem1', managerId: '1980', memberId: '757578', budget: 35000, status : 'Pending', createdDate:'02/09/1222',completedDate:'10/09/1222'},
	// 	{ id: '1', title:'project-t', description:'lorem3', managerId: '2980', memberId: '5454', budget: 35000, status : 'Completed', createdDate:'07/02/1922',completedDate:'02/09/1922'},
	// 	{ id: '501', title:'Ve Shop', description:'lorem2', managerId: '3980', memberId: '7878', budget: 35000, status : 'Review', createdDate:'08/01/1292',completedDate:'10/02/1292'},
	// 	{ id: '101', title:'project-v', description:'lorem1', managerId: '1980', memberId: '757578', budget: 35000, status : 'Pending', createdDate:'02/09/1222',completedDate:'10/09/1222'},
	// 	{ id: '1', title:'project-t', description:'lorem3', managerId: '2980', memberId: '5454', budget: 35000, status : 'Completed', createdDate:'07/02/1922',completedDate:'02/09/1922'},
	// 	{ id: '501', title:'Ve Shop', description:'lorem2', managerId: '3980', memberId: '7878', budget: 35000, status : 'Review', createdDate:'08/01/1292',completedDate:'10/02/1292'},
	// ];
	
	rowData: any[] = [];

	// ngOnInit() {
	// 	let projectsData = JSON.parse(localStorage.getItem('Project') || '[]');
	// 	this.rowData = projectsData.map((projectData: any) => ({
	// 	  id: projectData.firstFormGroup.projectIdCtrl,
	// 	  title: projectData.firstFormGroup.projectTitleCtrl,
	// 	  description: projectData.firstFormGroup.descriptionCtrl,
	// 	  managerId: projectData.secondFormGroup.managerId,
	// 	  memberId: projectData.secondFormGroup.memberId,
	// 	  budget: this.currencyPipe.transform(projectData.thirdFormGroup.budgetselected),
	// 	  status: projectData.thirdFormGroup.statusselected,
	// 	  createdDate: '02/09/2023',
	// 	  completedDate: '09/09/2023',
	// 	}));
	//   }

	ngOnInit() {
		this.loadProjectsFromLocalStorage();
	  }
	
	  loadProjectsFromLocalStorage() {
		let projectsData = JSON.parse(localStorage.getItem('Project') || '[]');
		this.rowData = projectsData.map((projectData: any) => ({
		  id: projectData.firstFormGroup.projectIdCtrl,
		  title: projectData.firstFormGroup.projectTitleCtrl,
		  description: projectData.firstFormGroup.descriptionCtrl,
		  managerId: projectData.secondFormGroup.managerId,
		  memberId: projectData.secondFormGroup.memberId,
		  budget: this.currencyPipe.transform(projectData.thirdFormGroup.budgetselected),
		  status: projectData.thirdFormGroup.statusselected,
		  createdDate: '02/09/2023',
		  completedDate: '09/09/2023',
		}));
	  }
	
	  onCellValueChanged(params: any) {
		this.updateLocalStorage();
	  }
	
	  updateLocalStorage() {
		localStorage.setItem('Project', JSON.stringify(this.rowData));
	  }
	
}
