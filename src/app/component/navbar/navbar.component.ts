import { Component, Input, OnInit } from '@angular/core';
import { NavData } from 'src/app/model/NavData';
import { default as data } from '../../data.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  anchorClass: any = '';
  listClass: any = '';
  hrefLink: any = '';
  item: any = '';
  @Input() hasSubNav: any = '';
  @Input() subNav: any = '';
  @Input() currItem: any = '';
  constructor() {}

  ngOnInit(): void {
    this.setClasses(this.currItem);
  }

  setAnchorClass(item: any) {
    if (item.subnav) {
      this.anchorClass = 'nav-link dropdown-toggle';
      this.listClass = 'nav-item dropdown';
      this.hasSubNav = true;
      this.hrefLink = '#';
      this.subNav = item.subnav;
    } else {
      this.anchorClass = 'nav-link';
      this.listClass = 'nav-item';
      this.hrefLink = item.link;
      this.hasSubNav = false;
    }
  }

  setClasses(item: any) {
    this.setAnchorClass(item);
    return true;
  }
}
