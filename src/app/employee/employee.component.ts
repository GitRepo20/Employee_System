import { Component, OnInit } from '@angular/core';
import { CreateempserviceService } from '../createempservice.service'; 


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  emp_obj = {
             employee_name : '',
             employee_salary : '',
             employee_age : ''
            };
  constructor(private createEmp : CreateempserviceService) { 
  }

  ngOnInit(): void {
  }

  addEmployee() {

	this.createEmp.addEmployee(this.emp_obj).subscribe(res => {
    	console.log(" Results **** : " +res);
	});
  }

}
