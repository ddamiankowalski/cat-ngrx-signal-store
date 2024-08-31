import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';

type CatState = {
  cats: string[];
  isLoading: boolean;
};

const initialState: CatState = {
  cats: [],
  isLoading: false
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
      async _fetchCats() {
        patchState(store, { isLoading: true });

        const promise = new Promise<void>(resolve => setTimeout(() => resolve(), 3000))
        await promise;

        patchState(store, { cats: ['damians cat', 'szymons cat'], isLoading: false })
      }
    };
  }),

  // tutaj dodajemy metody typu "hooks"
  withHooks({
    onInit: (store) => {
      store._fetchCats();
    }
  })
);
