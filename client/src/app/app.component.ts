import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer class="mt-auto"></app-footer>
  <app-error></app-error>
  `,
  styles: ['']
})
export class AppComponent {
}
