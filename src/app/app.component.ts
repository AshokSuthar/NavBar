import { Component, Input } from '@angular/core';
import { default as data } from '../app/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() navItems: any = data.navigation;
  logo: string = data.general.name;
  title = 'navbar';
}
