import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

import { ListEmpComponent } from './list-emp/list-emp.component';

const approutes: Routes = [
 {  path:'',   children : [
   {path:'CreateEmp', component: CreateEmpComponent},
    {path:'ListEmp', component:ListEmpComponent},
    {path:'EditEmp', component:EditEmpComponent},
     {path:'', redirectTo:'ListEmp', pathMatch:"full"}       
 ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(approutes)],
  exports: [RouterModule]
})
export class EmplRoutinEgModule { }
