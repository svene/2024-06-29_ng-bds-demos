import {Component, computed, input, Input} from '@angular/core';
import {BalCard, BalCardContent, BalCardTitle} from "@baloise/ds-angular";

@Component({
  selector: 'app-iseven-signal',
  standalone: true,
  imports: [
    BalCard,
    BalCardContent,
    BalCardTitle
  ],
  template: `
    <bal-card>
      <bal-card-title>IsEven Signal</bal-card-title>
      <bal-card-content>
        <p>isEven: {{ isEven }}</p>
      </bal-card-content>
    </bal-card>
  `,
})
export class IsEvenSignalComponentComponent {
  counter = input<number>();
  isEven = computed(() => this.counter() ?? 0 % 2 === 0);
}
