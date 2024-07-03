import {Component, Input} from '@angular/core';
import {BalCard, BalCardContent, BalCardTitle} from "@baloise/ds-angular";
import {count} from "rxjs";

@Component({
  selector: 'app-iseven-setter',
  standalone: true,
  imports: [
    BalCard,
    BalCardContent,
    BalCardTitle
  ],
  template: `
    <bal-card>
      <bal-card-title>IsEven Setter</bal-card-title>
      <bal-card-content>
        <p>isEven: {{ isEven }}</p>
      </bal-card-content>
    </bal-card>
  `,
})
export class IsevenSetterComponent {
  isEven: boolean | undefined;

  @Input({required: true})
  set counter(c: number) {
    this.isEven = c % 2 === 0;
  }
}
