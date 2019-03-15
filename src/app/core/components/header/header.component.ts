import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Emits the event `menuClick` up the component heirarchy.
   * Currently being used for toggling side menu
   */
  menuToggle() {
    this.menuClick.emit();
  }

}
