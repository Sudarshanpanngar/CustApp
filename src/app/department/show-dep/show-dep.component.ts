import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddDepComponent } from 'src/app/department/add-dep/add-dep.component'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import {EditDepComponent} from 'src/app/department/edit-dep/edit-dep.component';

// const ElementData = [
//   {Options:'', DepartmentID:1, DepartmentName:'IT', FeedBack:'VeryGood',Rating:'*****'},
//   {Options:'', DepartmentID:2, DepartmentName:'Finance', FeedBack:'Good',Rating:'****'},
//   {Options:'', DepartmentID:3, DepartmentName:'HR', FeedBack:'Good',Rating:'****'},
//   {Options:'', DepartmentID:4, DepartmentName:'Biotech', FeedBack:'VeryGood',Rating:'****'}
// ];

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {
   
   constructor(private DeptServ:DepartmentService,private dialog:MatDialog,private _snackBar:MatSnackBar) { 
     this.DeptServ.listen().subscribe((m:any)=>{
       console.log(m);
       this.getList();
     })
   }
   displayedColumns: string[] = [ 'Options','DepartmentID','DepartmentName'];
   dataSource: MatTableDataSource<any>;


   @ViewChild(MatSort) sort:MatSort;

  ngOnInit(): void {
    this.getList();
  }
   
    getList(){
       this.DeptServ.getDeptData().subscribe( (data) => {
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
       this.dialog.open(AddDepComponent,dialogConfig);
    }

   onEdit(dep:Department){
      this.DeptServ.formData=dep;
      const dialogConfig= new MatDialogConfig();
       dialogConfig.disableClose=true;
       dialogConfig.autoFocus=true;
       dialogConfig.width="70%";
       this.dialog.open(EditDepComponent,dialogConfig);

   }

   onDelete(id:number) {
     if(confirm('Sure You Want to delete the Department')) {
       this.DeptServ.deleteDepart(id).subscribe(res=> {
         this.getList();
         this._snackBar.open('Deleted Successfully......','', {
           duration:3000,
           verticalPosition:"top"
         })
       });
     }
   }
}
