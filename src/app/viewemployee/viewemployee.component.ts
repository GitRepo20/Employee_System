import { Component, OnInit } from '@angular/core';
import { CreateempserviceService } from '../createempservice.service'; 

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  emp_obj : any;
  id : any;
  operationType : any;

  constructor(private createEmp : CreateempserviceService) {}

  ngOnInit(): void {
  	let data = history.state.data;
  	this.id = history.state.data.id;
    this.operationType = history.state.data.operationType;
  	this.getEmployee();
  }

  getEmployee() {
	this.createEmp.getEmployee(this.id).subscribe(res => {
		this.emp_obj = res;
    	console.log(" Results **** : " +res);
	});
  }

	updateEmployee() {
		this.createEmp.updateEmployee(this.emp_obj).subscribe(res => {
		this.emp_obj = res;
    	console.log(" Results **** : " +res);
	});
	}
}
