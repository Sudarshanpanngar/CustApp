import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/Employee/add-emp/add-emp.component';
import { Employee} from 'src/app/models/employee.model';
import { EmployeeService} from 'src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddEmpComponent>,public empService:EmployeeService,
    private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
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
    console.log(form.value);
    this.empService.updateEmp(form.value).subscribe((res)=>{
      this.resetForm(form);
      this._snackBar.open('Updated Successfully','',{
        duration:3000,
        verticalPosition:'top'
      })
    });
  }

}
