import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
  
// Signup Component
export class SignupComponent {
  // set the currenr year
  year: number = new Date().getFullYear();
}
