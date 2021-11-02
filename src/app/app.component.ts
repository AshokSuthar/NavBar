import { Component } from '@angular/core';
import { default as data } from '../app/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logo: string = data.general.name;
  title = 'navbar';
}
