import { Component, inject } from '@angular/core';
import { CatStore } from './store/cat.store';
import { interval, map } from 'rxjs';

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
    this.store.getInfo(interval(500).pipe(map(i => i.toString())));
  }

  public onAddCatClick(catName: string): void {
    this.store.addCat(catName);
  }
}
