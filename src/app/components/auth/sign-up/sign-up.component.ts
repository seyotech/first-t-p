import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { authValidator } from '../validators/auth.validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      authValidator.noWhiteSpace
      ]), authValidator.usernameExistAsync],
      email: [''],
      password: ['']
    })
  }

  signUp() {
    console.log({ ...this.regForm.value }, this.regForm)
  }

}

