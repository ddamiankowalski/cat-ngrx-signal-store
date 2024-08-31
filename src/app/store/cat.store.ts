import { computed } from '@angular/core';
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';

type CatState = {
  cats: string[];
};

const initialState: CatState = {
  cats: [],
};

export const CatStore = signalStore(
  // tutaj dodajemy initial state
  withState(initialState),

  // tutaj dodajemy selektory
  withComputed((store) => {
    return {
      catsCount: computed(() => store.cats().length)
    }
  }),

  // tutaj dodajemy metody (reducery)
  withMethods((store) => {
    return {
      addCat(name: string): void {
        patchState(store, (state) => ({ cats: [...state.cats, name] }));
      },
      removeCat(name: string): void {
        patchState(store, (state) => ({
          cats: state.cats.filter((cat) => cat !== name),
        }));
      },
    };
  }),

  // tutaj dodajemy metody typu "hooks"
  withHooks({
    onInit: () => {},
    onDestroy: () => {}
  })
);
