import { Component } from '@angular/core';
import {IsevenSetterComponent} from "./iseven-setter/iseven-setter.component";

@Component({
  selector: 'app-signal-input-demo',
  standalone: true,
  imports: [
    IsevenSetterComponent
  ],
  template: `
    <p>signal-input-demo works!</p>
    <app-iseven-setter></app-iseven-setter>
  `,
})
export class SignalInputDemoComponent {

}
