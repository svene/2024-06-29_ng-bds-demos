import {Component, Input} from '@angular/core';
import {BalCard} from "@baloise/ds-angular";
import {count} from "rxjs";

@Component({
  selector: 'app-counter-nosetter',
  standalone: true,
  imports: [
    BalCard
  ],
  template: `
    <bal-card>
      <p>counter: {{counter}}</p>
    </bal-card>
  `,
})
export class CounterNoSetterComponent {
  @Input({required: true})
  counter!: number
}
