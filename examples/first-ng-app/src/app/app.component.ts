import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <p>Hello!</p>
    <router-outlet />
  `,
  styles: [
      `
      p {background-color: lightblue;
          font-size: 20px;}
      `,

      ],
})
export class AppComponent {
  title = 'first-ng-app';
}
