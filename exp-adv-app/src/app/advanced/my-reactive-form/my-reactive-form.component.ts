import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.scss']
})
export class MyReactiveFormComponent {
  message ="";

  registerForm!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
    });
  }

  onSubmit() {
    this.message=  JSON.stringify(this.registerForm.value);
  }
}
