import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/register/register.model';
import { MatCardModule } from '@angular/material/card';
import { RegisterService } from 'src/app/services/register.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginServe: RegisterService, private router: Router) { }
  msg:string ="";
  enable:boolean=false;

  regData: any;

  ngOnInit(): void {
    this.resetForm();

  }

  form: NgForm;
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.loginServe.formData = {
      username: '',
      password: '',
      role: ''
    }
  }

  onSubmit(form: NgForm) {
    let formData = form.value;

    return this.loginServe.getUserData().subscribe(data => {
      for (let element of data) {
        if (element.username === formData.username && element.password === formData.password) {

          this.router.navigate(['home'])
          this.resetForm();
        }
        else if (element.username != formData.username && element.password != formData.password) {
          this.msg = "Invaid Credentials- Try Again With valid !"
          this.resetForm();
        }

      }
    })
  }
}
