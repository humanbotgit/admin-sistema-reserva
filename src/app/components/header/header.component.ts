import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  User_Name:string="user_name";
  showFiller = false;
  faBars = faBars;
}
