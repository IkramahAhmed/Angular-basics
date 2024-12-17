import { AbstractControl } from '@angular/forms';


// // Yes, you are correct! **AbstractControl** allows access to form fields (inputs) in different components or parts of a form.

// In simple words:

// FormControl → Handles a single input field.
// FormGroup → Handles multiple input fields (a group of controls).
// FormArray → Handles a list of controls.

// **AbstractControl** is the parent class that connects and manages all of these, so you can access values, errors, and states of any form field easily.

// Key Point:

// AbstractControl gives you the power to:

//     Access values of different fields.
//     Check if fields are valid or touched.
//     Set or get errors for individual fields or groups.

// It works for all types of forms (FormControl, FormGroup, or FormArray).
export class PasswordValidators {
  static validOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({ invalidOldPassword: true }); // Error if oldPassword is not '1234'
      } else {
        resolve(null); // No error
      }
    });
  }

  static passwordShouldMatch(control:AbstractControl){
let newPassword =control.get('newPassword');
let confirmPassword =control.get('confirmPassword');

if (newPassword?.value !== confirmPassword?.value) {
    return { passwordShouldMatch: true }; // Return error
  }

  return null; // No error
}
}
