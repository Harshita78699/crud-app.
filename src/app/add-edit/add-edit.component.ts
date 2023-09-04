import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  Form: FormGroup;



  constructor(private _fb: FormBuilder, private _resService:RestaurantService, private _dialogRef: DialogRef<AddEditComponent>) {
    this.Form = this._fb.group({
      Name: '',
      ContactNumber:'',
      Address:'',
      Service:'',

    })
  }

onFormSubmit() {
  if(this.Form.valid){
    this._resService.addrestaurant(this.Form.value).subscribe({
      next:(val:any) =>{
        alert('Restaurant added successfully');
        this._dialogRef.close();

      },
      error:(err:any) => {
        console.error(err);
      },
    })
   
  }
}

}
