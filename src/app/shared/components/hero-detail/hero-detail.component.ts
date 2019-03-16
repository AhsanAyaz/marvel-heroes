import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'mh-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    public dialogRef: MatDialogRef<HeroDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hero: Hero }
  ) { }

  ngOnInit() {
    this.hero = this.data.hero;
  }

  dismiss() {
    this.dialogRef.close();
  }

}
