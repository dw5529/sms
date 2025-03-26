import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // ✅ Inject Router
    this.signupForm = this.fb.group({
    
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      
      // Data local storage میں save کریں
      localStorage.setItem('user', JSON.stringify(userData));
  
      console.log('Signup successful:', userData);
      this.router.navigate(['/home']); // Redirect to home after signup
    }
  }
  
}
