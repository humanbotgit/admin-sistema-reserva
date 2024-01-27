import { Component, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  User_Name:string="user_name";
  showFiller = false;
  faBars = faBars;
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
}
