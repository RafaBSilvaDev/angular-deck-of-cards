import { ApiService } from './../../services/api.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Deck } from 'src/app/services/api.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() onNewDeck: EventEmitter<Deck> = new EventEmitter<Deck>();

  constructor(
    private ApiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  newDeck() {
    this.ApiService
    .postDeck()
    .subscribe((deck) => this.onNewDeck.emit(deck));
  }
}
