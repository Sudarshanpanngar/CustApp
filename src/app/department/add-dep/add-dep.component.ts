import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { Department} from 'src/app/models/department.model';
import { DepartmentService} from 'src/app/services/department.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddDepComponent>,public deptService:DepartmentService,
    private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    this.resetForm();
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
    this.deptService.addDeptData(form.value).subscribe((res)=>{
      this.resetForm(form);
      this._snackBar.open('Added Successfully','',{
        duration:3000,
        verticalPosition:'top'
      })
    })
    }
}
