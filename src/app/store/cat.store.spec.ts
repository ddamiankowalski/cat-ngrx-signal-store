import { getState } from '@ngrx/signals';
import { CatStore } from './cat.store';
import { TestBed } from '@angular/core/testing';

describe('CatStore', () => {
  const setup = () => {
    TestBed.configureTestingModule({
      providers: [CatStore],
    });

    return TestBed.inject(CatStore);
  };

  it('successfully initializes', () => {
    const store = setup();
    expect(store).toBeTruthy();
  });

  it('has correct initial state', () => {
    const store = setup();
    const state = getState(store);

    expect(state).toStrictEqual({ cats: [], isLoading: true });
  });

  it('successfully adds a new cat', () => {
    const store = setup();
    store.addCat('test-cat');

    expect(store.cats()).toHaveLength(1);
    expect(store.cats()).toStrictEqual(['test-cat']);
  });

  it('successfully delets a new cat', () => {
    const store = setup();
    store.addCat('test-cat');
    store.removeCat('test-cat');

    expect(store.cats()).toHaveLength(0);
    expect(store.cats()).toStrictEqual([]);
  });
});
