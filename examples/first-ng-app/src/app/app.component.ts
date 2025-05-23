import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
      
    </main>

  `,
  styles: [
      `
      main {
        padding-inline: 16px;
        padding-block: 8px;
        }
      `,

      ],
})
export class AppComponent {
  title = 'first-ng-app';
}
