import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from 'src/app/models/employee.model';
import {Observable,ObservedValuesFromArray,Subject} from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private empHttp:HttpClient) { }

  formData:Employee;
 
  readonly ApiUrl="http://localhost:3000/";

  getEmpData():Observable<Employee[]>{
    return this.empHttp.get<Employee[]>(this.ApiUrl+'Employees');
  }

  addEmpData(emp:Employee[]) {
    return this.empHttp.post(this.ApiUrl+'Employees',emp);
  }
 
  getDepartDropDown():Observable<any>{
    return this.empHttp.get<Department[]>(this.ApiUrl+'Departments');
  }

  private _listeners=new Subject<any>();

  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  
   filter(filterBy:string) {
     this._listeners.next(filterBy);
   }

   deleteEmp(id:number){
     return this.empHttp.delete(this.ApiUrl+'Employees/'+id);
   }

   updateEmp(emp:Employee){
     return this.empHttp.put(this.ApiUrl+'Employees/'+emp.EmployeeID,emp);
   }

  

}
