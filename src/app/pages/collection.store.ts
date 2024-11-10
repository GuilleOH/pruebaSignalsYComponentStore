import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface Comic {
    title:string,
    editorial:string,
    value:number;
}

interface Juego {
    title:string,
    company:string,
    value:number;
}     

export interface CollectionState {
  comics: Comic[];
  juegos: Juego[];
  
}

@Injectable({
    providedIn: 'root',
})
export class CollectionStore extends ComponentStore<CollectionState> {

  constructor() {
    super({ comics: [], juegos:[]}); 
  }

  readonly comics = this.selectSignal(state => state.comics);
  readonly juegos = this.selectSignal(state => state.juegos);

  readonly valorTotalComics = this.selectSignal(
    (state) =>
      state.comics.reduce((acc, comic) => acc + comic.value, 0)
  );

  readonly valorTotalJuegos = this.selectSignal(
    (state) =>
      state.juegos.reduce((acc, juego) => acc + juego.value, 0)
  );

  readonly valorTotal = this.selectSignal(
    () => {  
        return this.valorTotalComics() + this.valorTotalJuegos();
    }
  );

  readonly addComic = this.updater((state, comic: Comic) => ({
        ...state,
        comics: [...state.comics, comic]
  }));

  readonly addJuego = this.updater((state, juego: Juego) => ({
    ...state,
    juegos: [...state.juegos, juego]
  }));




}
