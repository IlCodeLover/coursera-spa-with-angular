import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0); // signal to hold the counter value
  // create handler
  increaseHandler(){
    this.counterValue.update((value) => value + 1); // update the signal value
  }

  decreaseHandler(){
    this.counterValue.update((value) => value -1);
  }

  resetHandler(){
    this.counterValue.set(0); // set the signal value to 0
  }
}
