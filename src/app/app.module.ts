import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeModule } from 'src/app/models/employee/employee.module';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustMaterialsModule } from 'src/app/models/cust-materials/cust-materials.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './Employee/show-emp/show-emp.component';
import { EditEmpComponent } from './Employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './Employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './Department/show-dep/show-dep.component';
import { EditDepComponent } from './Department/edit-dep/edit-dep.component';
import { AddDepComponent } from './Department/add-dep/add-dep.component';
import { DepartmentService } from './services/department.service';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    ShowDepComponent,
    EditDepComponent,
    AddDepComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustMaterialsModule    
  ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[AddDepComponent]
})
export class AppModule { 
  

}
