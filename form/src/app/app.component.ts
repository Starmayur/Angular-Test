import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupName, Validators} from '@angular/forms'
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private fb: FormBuilder){}
  registrationForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
    confirmpassword: ['',Validators.required],
    address:this.fb.group({
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required]
    })
  });
}
