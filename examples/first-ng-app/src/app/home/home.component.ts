import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // define a signal to hold the message and pass it to its child component
  homeMessage = signal("Greeting is initialized in home component.")

  // define keyUp event handler
  keyUpHandler() {
    console.log("keyUpHandler is called");
  }

  // define keyDown event handler
  keyDownHandler(event: KeyboardEvent) {
    console.log("user pressed key: " + event.key);
    console.log(event);
  }
}
