import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  heroes: Hero[];

  selectedHero: Hero;

  // synchronous
  // getHeroes(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }
  
  // async w/ observable
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    // this.selectedHero = hero;

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

    this.messageService.add(`HeroComponent: Selected hero id=${ hero.id }`);
  }


  ngOnInit() {
    console.log('--> ngOnInit executed: \n')
    this.getHeroes();
  }

}
