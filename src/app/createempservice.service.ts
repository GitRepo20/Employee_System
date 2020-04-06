import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateempserviceService {
  
  http : any;
  
  constructor(httpClient : HttpClient) { 
	  this.http = httpClient;
  }

  getEmployeeList() :  Observable<any> {
  	 return this.http.get('http://localhost:8080/getEmployeeList');
  }

  getEmployee(id) :  Observable<any> {    
     return this.http.get('http://localhost:8080/getEmployee?id='+id);
  }

  addEmployee(emp_obj : any) :  Observable<any> {
  	 return this.http.post('http://localhost:8080/saveemployee', emp_obj);
  }

  updateEmployee(emp_obj) :  Observable<any> {
     return this.http.post('http://localhost:8080/', emp_obj);
  }

  deleteEmployee(id) :  Observable<any> {    
     return this.http.get('http://localhost:8080/deleteEmployee?id='+id);
  }
}
