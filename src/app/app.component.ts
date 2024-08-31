import { Component, inject } from '@angular/core';
import { CatStore } from './store/cat.store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public store = inject(CatStore);
}
