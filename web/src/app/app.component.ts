import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { Drawer } from 'primeng/drawer';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule, FormsModule, Button, Toolbar, Drawer]
})
export class AppComponent {
  title = 'web';
  signedIn = false;
  showDrawer = false;
  private readonly router = inject(Router);

  constructor() { }

  routeToAccount() {
    this.router.navigateByUrl('account');
  }
}
