import { Card, Deck} from 'src/app/services/api.models';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  get deckId(): string {
    const currentId = this.activatedRoute.snapshot.paramMap.get("id")
    return currentId || 'new';
  }

  public cards: Card[] = [];
  deck: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.deckDraw();
  }

  deckDraw() {
    this.apiService
    .getDeckDraw(this.deck.deck_id)
    .subscribe((draw) => this.cards = draw.cards)
  }



}
