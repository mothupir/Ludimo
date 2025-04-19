import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tabs, Tab, TabList, TabPanels, TabPanel } from 'primeng/tabs';
import { SigninComponent } from '../../components/account/signin/signin.component';
import { SignupComponent } from '../../components/account/signup/signup.component';
import { ImportComponent } from '../../components/account/import/import.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  standalone: true,
  imports: [
    CommonModule, FormsModule, 
    Tabs, Tab, TabList, TabPanels, TabPanel,
    SigninComponent, SignupComponent, ImportComponent
  ]
})
export class AccountComponent {
  constructor() { }
}
