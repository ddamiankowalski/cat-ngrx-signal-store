import { signalStore, withState } from '@ngrx/signals';

const initialState = {
  cats: [],
};

export const CatStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
