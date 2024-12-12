import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
@Input() message = ''
form: FormGroup;


constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}

login(){
  this.form.setErrors({
    invalidLogin:true
  });

}


// output data send from chil to parent
@Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
}



