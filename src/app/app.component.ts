import { Component, inject } from '@angular/core';
import { CatStore } from './store/cat.store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CatStore],
})
export class AppComponent {
  public store = inject(CatStore);

  constructor() {
    this.store.addCat('sample cat');
    this.store.addCat('szymon`s cat')
  }

  public onAddCatClick(catName: string): void {
    this.store.addCat(catName);
  }
}
