import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{
  Form: FormGroup;



  constructor(private _fb: FormBuilder, private _resService:RestaurantService, private _dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.Form = this._fb.group({
      Name: '',
      ContactNumber:'',
      Address:'',
      Service:'',

    })
  }
  ngOnInit(): void {
    this.Form.patchValue(this.data);
  }

onFormSubmit() {
  if(this.Form.valid){
    if(this.data){this._resService.updaterestaurant(this.data.String,this.Form.value).subscribe({
      next:(val:any) =>{
        alert('Restaurant detail updated');
        this._dialogRef.close(true);
        console.log('Form submitted');

      },
      error:(err:any) => {
        console.error(err);
      },
    });

    } else{this._resService.addrestaurant(this.Form.value).subscribe({
      next:(val:any) =>{
        alert('Restaurant added successfully');
        this._dialogRef.close(true);
        console.log('Form submitted');

      },
      error:(err:any) => {
        console.error(err);
      },
    });

    }
    this._resService.addrestaurant(this.Form.value).subscribe({
      next:(val:any) =>{
        alert('Restaurant added successfully');
        this._dialogRef.close(true);
        console.log('Form submitted');

      },
      error:(err:any) => {
        console.error(err);
      },
    });
   
  }
}

}
