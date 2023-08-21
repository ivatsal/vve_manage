import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

	columnDefs: ColDef[]  = [
		{headerName: 'ID', field: 'id', editable: true},
		{headerName: 'Title', field: 'model' },
		{headerName: 'Description', field: 'price'},
		{headerName: 'Manager ID', field: 'price'},
		{headerName: 'Member ID', field: 'price'},
		{headerName: 'Budget', field: 'price'},
		{headerName: 'Status', field: 'price'},
		{headerName: 'Created Date', field: 'price'},
		{headerName: 'Completed Date', field: 'price'}
	];

	rowData = [
		{ id: 'Toyota', model: 'Celica', price: 35000 },
		{ id: 'Ford', model: 'Mondeo', price: 32000 },
		{ id: 'Porsche', model: 'Boxster', price: 72000 }
	];
}
