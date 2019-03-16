import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero';
import { FormGroup, FormControl } from '@angular/forms';
import { MarvelService } from '../core/services/marvel.service';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime } from 'rxjs/operators';
import { HeroDetailComponent } from '../shared/components/hero-detail/hero-detail.component';

@Component({
  selector: 'mh-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes: Array<Hero> = [];
  loadingHeroes: boolean;
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });
  constructor(
    private marvelService: MarvelService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // load the heroes initially
    this.loadHeroes({});

    // whenever the value of the search input changes, load the heroes with the search query
    this.searchForm.get('name').valueChanges
      .pipe(
        debounceTime(400)
      ).subscribe((nameVal) => {
        this.loadHeroes({name: nameVal});
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Uses the marvel service to fetch the heroes. Assigns the the heroes model
   * which is then rendered to the view.
   * Also displays a loader while the heroes are being loaded.
   */
  loadHeroes({name = ''}) {
    this.loadingHeroes = true;
    this.marvelService.getCharacters({name}).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
      this.loadingHeroes = false;
    });
  }

  showDetails(hero: Hero) {
    this.dialog.open(HeroDetailComponent, {
      width: '300px',
      data: {hero}
    });
  }

}
