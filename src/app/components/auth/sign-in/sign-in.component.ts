import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { authValidator } from '../validators/auth.validators';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserStorageService } from '../utils/storage.service';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private localStorages: BrowserStorageService, private router: Router) {
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
    if (this.regForm.invalid) return
    const user = JSON.parse(`${this.localStorages.get('user')}`);
    if (!user) {
      this.router.navigate(['/sign-up']);
    } else if (user && user.userName === this.regForm.get('userName')?.value && user.password === this.regForm.get('password')?.value) {
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password');
    }
  }

}
