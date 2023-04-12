import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-addmission-form',
  templateUrl: './addmission-form.component.html',
  styleUrls: ['./addmission-form.component.css']
})
export class AddmissionFormComponent {
 //NameFields: FormGroup | undefined;

  mainForm=new FormGroup({

    NameFields: new FormGroup({
      firstName: new FormControl(''),
      MiddleName: new FormControl(''),
      LastName: new FormControl('')
    }),

    DOB:new FormControl(''),
    pob:new FormControl(''),
    fLanguage:new FormControl(''),

    AddressFields:new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country:new FormControl(''),
      pincode:new FormControl('')
    }),
   
    fatherFields:new FormGroup({
      FfirstName:new FormControl(''),
      FMiddleName:new FormControl(''),
      FLastName:new FormControl(''),
      Femail:new FormControl(''),
      Fequali:new FormControl(''),
      Fprofession:new FormControl(''),
      Fdesignation:new FormControl(''),
      Fphone:new FormControl('')
    }),

    motherFields:new FormGroup({
      MfirstName:new FormControl(''),
      MMiddleName:new FormControl(''),
      MLastName:new FormControl(''),
      Memail:new FormControl(''),
      Mequali:new FormControl(''),
      Mprofession:new FormControl(''),
      Mdesignation:new FormControl(''),
      Mphone:new FormControl('')
    }),

    EmergencyContact:new FormGroup({
      relation:new FormControl(''),
      EmNmber:new FormControl('')
    }),

    refDeatils:new FormControl(''),
    refThrough:new FormControl(''),
    addresswithtel:new FormControl('')


  })

  getData(){
console.log(this.mainForm.value)
  }

}
