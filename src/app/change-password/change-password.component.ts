import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.validOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: [''], // No validation for confirm password
    },{
      Validator:PasswordValidators.passwordShouldMatch
    } );
  }

  // Submit Method
  changePassword() {
    if (this.form.valid) {
      console.log('Password Change Data:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
