import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/Employee/add-emp/add-emp.component';
import { EmployeeService} from 'src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddEmpComponent>,public empService:EmployeeService,
    private _snackBar:MatSnackBar ) { }
  
     public listItems:Array<string>=[];

  ngOnInit(): void {
    this.resetForm();
    this.dropDownRefresh();
  }

   dropDownRefresh(){
     return this.empService.getDepartDropDown().subscribe((data) => {
       console.log("depdata",data);
       data.forEach(element => {
         this.listItems.push(element['DepartmentName']);
       });
     })
   }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.empService.formData= {
      EmployeeID : 0,
      EmployeeName:'',
      Department:'',
      Email:'',
      DOJ:''
    }
  }
  onClose(){
    this.dialogbox.close();
    this.empService.filter('Register Click');
  }

  onSubmit(form:NgForm){
    this.empService.addEmpData(form.value).subscribe((res)=>{
      this.resetForm(form);
      this._snackBar.open('Added Successfully','',{
        duration:3000,
        verticalPosition:'top'
      })
    })
    // console.log(form.value);
  }

}
