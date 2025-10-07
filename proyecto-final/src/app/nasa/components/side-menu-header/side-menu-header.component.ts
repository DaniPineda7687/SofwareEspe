import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'nasa-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styles: ``
})
export class SideMenuHeaderComponent {
  environment = environment;
}
