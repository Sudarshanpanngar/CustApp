import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Department} from 'src/app/models/department.model';
import {Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private depthttp:HttpClient) { }

  formData:Department;
 
  readonly ApiUrl="http://localhost:3000/";

  getDeptData():Observable<Department[]>{
    return this.depthttp.get<Department[]>(this.ApiUrl+'Departments');
  }

  addDeptData(dept:Department[]) {
    return this.depthttp.post(this.ApiUrl+'Departments',dept);
  }

  private _listeners=new Subject<any>();

  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  
   filter(filterBy:string) {
     this._listeners.next(filterBy);
   }

   deleteDepart(id:number){
     return this.depthttp.delete(this.ApiUrl+'Departments/'+id);
   }

   updateDepart(dep:Department){
     return this.depthttp.put(this.ApiUrl+'Departments/'+dep.DepartmentID,dep);
   }
}
