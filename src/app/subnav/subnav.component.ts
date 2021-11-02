import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css'],
})
export class SubnavComponent implements OnInit {
  @Input() subNavItems: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.subNavItems);
  }
}
