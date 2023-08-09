import { Component } from '@angular/core';
import { NAV_ITEMS } from 'src/app/app.constants';

@Component({
  selector: 'mp-navbar',
  templateUrl: './mp-navbar.component.html',
  styleUrls: ['./mp-navbar.component.scss'],
})
export class MpNavbarComponent {
  public navigationItems;
  constructor() {
    this.navigationItems = NAV_ITEMS;
    console.log(this.navigationItems, "-----")
  }
}
