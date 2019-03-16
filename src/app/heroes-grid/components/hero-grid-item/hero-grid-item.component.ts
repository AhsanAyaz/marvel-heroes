import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'mh-hero-grid-item',
  templateUrl: './hero-grid-item.component.html',
  styleUrls: ['./hero-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroGridItemComponent implements OnInit {
  @Input() hero: Hero;
  @Output() heroClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
