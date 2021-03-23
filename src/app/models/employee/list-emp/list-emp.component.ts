import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CreateEmpComponent } from 'src/app/models/employee/create-emp/create-emp.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditEmpComponent } from 'src/app/models/employee/edit-emp/edit-emp.component';


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  constructor(private EmpServ:EmployeeService,private dialog:MatDialog,private _snackBar:MatSnackBar) { 
    this.EmpServ.listen().subscribe((m:any)=>{
      console.log(m);
      this.getList();
    })
  }
  dataSource: MatTableDataSource<any>;
   
  displayedColumns: string[] = [ 'Options','EmployeeID','EmployeeName','Department','Email','DOJ'];
  


  @ViewChild(MatSort) sort:MatSort;

 ngOnInit(): void {
   this.getList();
 }
  
   getList(){
      this.EmpServ.getEmpData().subscribe( (data) => {
     this.dataSource=new MatTableDataSource(data);
     this.dataSource.sort=this.sort;
   })
   }

   applyFilter(event:Event){
     const filterValue =(event.target as HTMLInputElement).value;
     this.dataSource.filter=filterValue.trim().toLowerCase();
   }

   onAdd(){
      const dialogConfig= new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="70%";
      this.dialog.open(CreateEmpComponent,dialogConfig);
   }

  onEdit(emp:Employee){
     this.EmpServ.formData=emp;
     const dialogConfig= new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="70%";
      this.dialog.open(EditEmpComponent,dialogConfig);

  }

  onDelete(id:number) {
    if(confirm('Sure You Want to delete the Emloyee')) {
      this.EmpServ.deleteEmp(id).subscribe(res=> {
        this.getList();
        this._snackBar.open('Deleted Successfully......','', {
          duration:3000,
          verticalPosition:"top"
        })
      });
    }
  }

}
