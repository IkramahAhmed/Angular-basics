import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
})
export class NewCourseFormComponent {
  form: FormGroup; // Declare a main form (FormGroup)
  constructor(private fb: FormBuilder) {
    // Use FormBuilder to create the form
    this.form = this.fb.group({
      topics: this.fb.array([]), // Initialize a FormArray called "topics" inside the form
    });
  }

// Getter to access the FormArray (makes the code easier to read)
get topics(): FormArray {
  return this.form.get('topics') as FormArray; // Access the "topics" FormArray from the form
}
removeTopic(index:number){
  this.topics.removeAt(index)
}


  // Function to add a topic to the FormArray
  addTopic(topic: string) {
    if (topic) {
      // Only add if the input is not empty
      this.topics.push(this.fb.control(topic)); // Add a new FormControl (topic) to the FormArray

      // this.topics.value = ''
    }
  }
}
