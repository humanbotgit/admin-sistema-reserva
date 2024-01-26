import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
interface LogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 constructor( public authService: AuthService){
  
 }
}
