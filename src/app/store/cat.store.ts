import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type CatState = {
  cats: string[];
};

const initialState: CatState = {
  cats: [],
};

export const CatStore = signalStore(
  withState(initialState),
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
  })
);
