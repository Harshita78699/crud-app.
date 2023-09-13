// 


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';

import { MatTableDataSource } from '@angular/material/table';
import jsonData from '../../db.json'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-app';

  displayedColumns: string[] = ['Name', 'ContactNumber', 'Address', 'Service','Action']; // Define column names 
  dataSource: any;
  jsonData: any[] = [];
  

   constructor(private _dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getrestaurantlist();   
  }

  openAddEditForm() {
    console.log('openAddEditForm');
    const DialogRef = this._dialog.open(AddEditComponent);
    DialogRef.afterClosed().subscribe({
      next:(val) =>{
        if(val) {
          this.getrestaurantlist();
        }
      }

    });
  }

  getrestaurantlist() {
    // this._resService.getrestaurantlist().subscribe({
    //   next: (res) => {
    //     this.jsonData = res; // Assign the JSON data to the jsonData property

    //     this.dataSource = new MatTableDataSource(res);
    //   },

    //   error: (err) =>
    //     console.log(err)
    
    // });
    this.jsonData = jsonData; // JSON data to jsonData
  }

  deleterestaurant(id: string) {
    console.log(id, 'id');
    // if (confirm('Are you sure you want to delete this?')) {
    //   this._resService.deleterestaurant(Name).subscribe({
    //     next: (res) => {
    //       alert('Restaurant deleted!');
    //       this.getrestaurantlist();
         
    //     },
    //     error: (err) => {
    //       console.error(err);
    //     },
    //   });
    // }
    if (confirm('Are you sure you want to delete this?')) {
      this.jsonData = this.jsonData.filter((element) => { return  element.id !== id });
    }
  }
  rowClick(row: any) {
  
  }
  openEditForm(data:any) {
    this._dialog.open(AddEditComponent,{
      data,
    });
        }
      }
