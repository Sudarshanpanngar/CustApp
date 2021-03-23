import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public regServe: RegisterService, public _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.regServe.formData = {
      username: '',
      password: '',
      role: ''
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.regServe.registerUser(form.value).subscribe((res) => {
      this.resetForm(form);
      this._snackBar.open('Added Successfully', '', {
        duration: 3000,
        verticalPosition: 'top'
      })
    })
  }


}
