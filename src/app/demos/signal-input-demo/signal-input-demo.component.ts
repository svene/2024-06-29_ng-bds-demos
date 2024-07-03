import { Component } from '@angular/core';
import {IsevenSetterComponent} from "./iseven-setter.component";
import {interval} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {CounterNoSetterComponent} from "./counter-nosetter.component";
import {IsEvenOnChangesComponent} from "./iseven-onchanges.component";

@Component({
  selector: 'app-signal-input-demo',
  standalone: true,
  imports: [
    IsevenSetterComponent,
    AsyncPipe,
    NgIf,
    CounterNoSetterComponent,
    IsEvenOnChangesComponent
  ],
  template: `
    <ng-container *ngIf="numbers$ | async as number">
      <h1>signal-input-demo</h1>
      <div>counter: {{number}}</div>

      <app-counter-nosetter [counter]="number"></app-counter-nosetter>
      <app-iseven-setter [counter]="number"></app-iseven-setter>
      <app-iseven-onchanges [counter]="number"></app-iseven-onchanges>
    </ng-container>
  `,
})
export class SignalInputDemoComponent {

  numbers$ = interval(1000)

}
