import { Component, Input, OnInit } from '@angular/core';
import { NavData } from 'src/app/model/NavData';
import { default as data } from '../../data.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // todos: NavData[] = [
  //   {
  //     title: 'hello',
  //     link: 'hellolink',
  //     subnav: [],
  //   },
  // ];

  @Input() navItems: any = data.navigation;
  constructor() {}

  ngOnInit(): void {
    console.log(data.navigation);
  }
}
