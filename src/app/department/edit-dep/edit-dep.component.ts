import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { AddEmpComponent } from 'src/app/Employee/add-emp/add-emp.component';
import { Department} from 'src/app/models/department.model';
import { DepartmentService} from 'src/app/services/department.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddEmpComponent>,public deptService:DepartmentService,
    private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.deptService.formData= {
      DepartmentID : 0,
      DepartmentName:''
    }
  }

  onClose(){
    this.dialogbox.close();
    this.deptService.filter('Register Click');
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.deptService.updateDepart(form.value).subscribe((res)=>{
      this.resetForm(form);
      this._snackBar.open('Updated Successfully','',{
        duration:3000,
        verticalPosition:'top'
      })
    });
  }

  

}
