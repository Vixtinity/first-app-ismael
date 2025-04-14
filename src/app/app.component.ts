import {Component} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, RouterLink],
  template: `
        <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
