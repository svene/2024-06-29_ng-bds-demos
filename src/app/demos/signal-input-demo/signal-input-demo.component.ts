import {Component} from '@angular/core';
import {interval, Observable, startWith} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {CounterNoSetterComponent} from "./counter-nosetter.component";
import {IsEvenOnChangesComponent} from "./iseven-onchanges.component";
import {IsEvenSignalComponentComponent} from "./iseven-signal.component";
import {IsEvenSetterComponent} from "./iseven-setter.component";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-input-demo',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    CounterNoSetterComponent,
    IsEvenOnChangesComponent,
    IsEvenSignalComponentComponent,
    IsEvenSetterComponent
  ],
  template: `
    <ng-container *ngIf="numbers$ | async as number">
      <h1>signal-input-demo</h1>
      <div>counter: {{number}}</div>

      <app-counter-nosetter [counter]="number"></app-counter-nosetter>
      <app-iseven-setter [counter]="number"></app-iseven-setter>
      <app-iseven-onchanges [counter]="number"></app-iseven-onchanges>
      <app-iseven-signal [counter]="numberSignal()"></app-iseven-signal>
    </ng-container>
  `,
})
export class SignalInputDemoComponent {

  numbers$: Observable<number> = interval(1000).pipe(startWith(-1));
  numberSignal = toSignal(this.numbers$);

}
