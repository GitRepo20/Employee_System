import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateempserviceService } from '../createempservice.service'; 

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  emp_obj = {};
  EmployeeArray : any;
  id : any;
  constructor(private createEmp : CreateempserviceService,private router: Router) { 
  }

  ngOnInit(): void {
  	this.getEmployeeList();
  }

  getEmployeeList() {
	this.createEmp.getEmployeeList().subscribe(res => {
		this.EmployeeArray = res;
    	console.log(" Results **** : " +res);
	});
  }

  getEmployee(ids : any, operationType : number) {
  		this.router.navigate(['/getEmployee'],{state: {data: {id : ids, operationType: operationType}}});	
  }

  deleteEmployee(ids : any) {
	this.createEmp.deleteEmployee(ids).subscribe(res => {
		this.emp_obj = res;
    	console.log(" Results **** : " +res);
	});
  }

}
