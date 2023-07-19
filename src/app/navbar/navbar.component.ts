import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showDropdown = false;
  selectedButton = ""; // Add this variable
  showSidebar = false; // Add this variable

  handleClick(button: string) {
    this.selectedButton = button;
    this.showSidebar = button === 'introduction' || button === 'resources' || button === 'js-tutorial' || button === 'php-tutorial' || button === 'sql-tutorial';
  }

   hideSidebar() {
     this.showSidebar = true;
   }
   toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
