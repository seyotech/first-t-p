import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { authValidator } from '../validators/auth.validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
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

  signIn() {
    console.log({ ...this.regForm.value }, this.regForm)
  }

}
