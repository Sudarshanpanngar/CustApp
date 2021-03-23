import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  empForm:FormGroup;

  constructor(private fromBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.empForm=this.fromBuilder.group({
      empID:['',Validators.required],
      empTitle:['',Validators.required],  
      empName:['',Validators.required],
      email:['',Validators.required],
      DOJ:['',Validators.required]
    })

  

  }

}
