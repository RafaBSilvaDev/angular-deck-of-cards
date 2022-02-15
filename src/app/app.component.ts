import { ApiService } from './services/api.service';
import { Deck } from './services/api.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'deck-of-cards';

  public deck: Deck = {};

  constructor(
    private ApiService: ApiService,

  ) {}

  ngOnInit() {
    this.newDeck();
  }

  onNewDeck(deck: Deck) {
    this.deck = deck
  }

  newDeck() {
    this.ApiService
    .postDeck()
    .subscribe((deck) => this.deck = deck)
  }



}
