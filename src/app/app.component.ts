import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component'; // Import your AddEditComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-app';
   
  constructor(private _dialog: MatDialog) {}

  openAddEditForm() {
    this._dialog.open(AddEditComponent);
  }
}
