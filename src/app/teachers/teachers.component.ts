import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teacherForm: FormGroup;
  teachers: any[] = []; // List of teachers

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      teacher_id: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      this.teachers.push(this.teacherForm.value); // Add new teacher to the list
      this.teacherForm.reset(); // Reset form after submission
    }
  }
}
