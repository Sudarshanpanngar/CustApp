import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustMaterialsModule } from '../cust-materials/cust-materials.module';
import { EmplRoutinEgModule } from '../employee/employee-routing.module';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [CreateEmpComponent, ListEmpComponent, EditEmpComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CustMaterialsModule,
    EmplRoutinEgModule
  ]
})
export class EmployeeModule { }
