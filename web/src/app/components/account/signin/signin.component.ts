import { Component, Output } from '@angular/core';

import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  standalone: true,
  imports: [InputText, FloatLabel]
})
export class SigninComponent {
  
}
