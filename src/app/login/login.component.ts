import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // username کی جگہ email استعمال کریں
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email'); // یہاں email ہونا چاہیے، username نہیں
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const savedUser = localStorage.getItem('user');
  
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        
        if (this.email?.value === userData.email && this.password?.value === userData.password) {
          console.log('Login successful:', userData);
          this.router.navigate(['/home']); // Redirect after successful login
        } else {
          alert('Invalid credentials'); // Error if email/password does not match
        }
      } else {
        alert('User not found. Please sign up first.');
      }
    }
  }
}
