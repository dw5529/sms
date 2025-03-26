import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dropdownOpen = false;

  toggleDropdown(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.dropdownOpen = !this.dropdownOpen;
  }
}
