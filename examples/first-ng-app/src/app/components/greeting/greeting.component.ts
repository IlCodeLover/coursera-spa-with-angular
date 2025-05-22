import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  // child component must give permission to parent component to pass property to it
  message = input('default greeting message from GreetingComponent');
}
