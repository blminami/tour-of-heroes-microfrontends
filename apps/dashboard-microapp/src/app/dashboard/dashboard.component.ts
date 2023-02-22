import { Component, OnInit } from '@angular/core';
import { HeroService } from 'core';
import { Hero } from 'models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  defaultImage =
    'https://i.postimg.cc/d34zPbkH/124983-boy-demon-anime-picture-free-download-image.png';

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
