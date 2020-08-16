import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Tour of Heroes';
  title = 'hi Thanh, you are using angular 9\nTour of Heroes!';
  heroes = HEROES;
}
