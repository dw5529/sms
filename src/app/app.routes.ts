import { provideRouter,Routes } from '@angular/router';
import {AboutComponent} from './about/about.component'
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


export const routes: Routes = [
    {path : 'about', component:AboutComponent},
    {path : 'contact', component:ContactComponent},
    {path : 'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'home', component:HomeComponent},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'students', component:StudentsComponent },
    { path: 'teachers', component: TeachersComponent},
   
];
