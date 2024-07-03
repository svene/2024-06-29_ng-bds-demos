import { Component } from '@angular/core';
import {IsevenSetterComponent} from "./iseven-setter/iseven-setter.component";
import {interval} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-signal-input-demo',
  standalone: true,
  imports: [
    IsevenSetterComponent,
    AsyncPipe,
    NgIf
  ],
  template: `
    <ng-container *ngIf="numbers$ | async as number">
      <h1>signal-input-demo</h1>
      <div>counter: {{number}}</div>

      <app-iseven-setter [counter]="number"></app-iseven-setter>
    </ng-container>
  `,
})
export class SignalInputDemoComponent {

  numbers$ = interval(1000)

}
