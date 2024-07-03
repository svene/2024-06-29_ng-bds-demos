import {Component, Input} from '@angular/core';
import {BalCard, BalCardContent, BalCardTitle} from "@baloise/ds-angular";
import {count} from "rxjs";

@Component({
  selector: 'app-counter-nosetter',
  standalone: true,
  imports: [
    BalCard,
    BalCardContent,
    BalCardTitle
  ],
  template: `
    <bal-card>
      <bal-card-title>NoSetter</bal-card-title>
      <bal-card-content>
        <p>isEven: {{ counter }}</p>
      </bal-card-content>
    </bal-card>
  `,
})
export class CounterNoSetterComponent {
  @Input({required: true})
  counter!: number
}
