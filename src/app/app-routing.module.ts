import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Card } from 'src/app/services/api.models';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [ {
  path: '',
  component: AppComponent
},
  {
    path: 'cards',
    component: CardsComponent
},
  {
    path: 'cards/:id',
    component: CardsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
