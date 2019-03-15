import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'mh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sideNav') sideNav: MatSidenav;

  /**
   * @author Ahsan Ayaz
   * @desc Closes the side nav
   */
  closeSideNav() {
    this.sideNav.close();
  }
}
