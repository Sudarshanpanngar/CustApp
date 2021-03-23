import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
//import {EmployeeModule} from './models/employee/employee.module';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'login',pathMatch:"full"},
 {path:'Departments', component: DepartmentComponent},
 {path:'Employees', loadChildren:'./models/employee/employee.module#EmployeeModule'},
 {path:'Register',component:RegisterComponent},
 {path:'login', component:LoginComponent},
 {path:'**', component:PagenotfoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], //{ enableTracing:true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
