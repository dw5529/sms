import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studentForm: FormGroup;
  students: any[] = []; // Students list

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      studentId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.students.push(this.studentForm.value); // Add new student to the list
      this.studentForm.reset(); // Reset form after submission
    }
  }
}
