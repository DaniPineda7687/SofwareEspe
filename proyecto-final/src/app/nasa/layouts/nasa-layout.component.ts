import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';

@Component({
  selector: 'app-nasa-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SideMenuComponent],
  templateUrl: './nasa-layout.component.html'
})
export class NasaLayoutComponent {}
