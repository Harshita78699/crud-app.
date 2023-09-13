import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{
  Form: FormGroup;
  initialData: any;



  constructor(private _fb: FormBuilder,  private _dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
    this.Form = this._fb.group({
     Name: '',
     ContactNumber:'',
      Address:'',
      Service:'',

     
        //Name: this.data ? this.data.Name : '', // Initialize with the data if available
       // ContactNumber: this.data ? this.data.ContactNumber : '', // Initialize with the data if available
       // Address: this.data ? this.data.Address : '', // Initialize with the data if available
       // Service: this.data ? this.data.Service : '', // Initialize with the data if available

    });
  }
  ngOnInit(): void {
    //this.Form.patchValue(this.data);
    // if (this.initialData) {
    
    //   this.Form.setValue({
    //     Name: this.initialData.Name || '',
    //     ContactNumber: this.initialData.ContactNumber || '',
    //     Address: this.initialData.Address || '',
    //     Service: this.initialData.Service || ''
    //   });
    //   this.data = this.initialData;
    // }
  }

  onFormSubmit() {
    if (this.Form.valid) {
     // let valueForm =this.Form.value.Name;
     // this.Form.value.Name =valueForm;
      this._dialogRef.close(this.Form.value);
     

        
    //     alert('Restaurant detail updated');
    //     this._dialogRef.close(this.data);
    //     console.log('Form submitted update');
    //   } else {
    //     this.data = this.Form.value;
    //     alert('Restaurant added successfully');
    //     this._dialogRef.close(this.data);
    //     console.log('Form submitted for add');
    //   }
    // } else {
      
    //   console.log('Form validation failed');
    
     }
   
  }
}

  

