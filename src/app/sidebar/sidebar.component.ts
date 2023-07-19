import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @Input() selectedButton: string = '';
  @Input() showSidebar: boolean = false;
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
