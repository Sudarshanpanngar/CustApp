import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor() { }

   employeeForm:FormGroup;

  ngOnInit(): void {
    this.employeeForm= new FormGroup({
      EmployeeID:new FormControl(),
      EmployeeName:new FormControl(),
      Email:new FormControl()
    })
  }

  onSubmit():void {
    console.log(this.employeeForm.value);
  }

}
