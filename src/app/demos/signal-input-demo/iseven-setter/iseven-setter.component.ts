import {Component, Input} from '@angular/core';
import {BalCard} from "@baloise/ds-angular";
import {count} from "rxjs";

@Component({
  selector: 'app-iseven-setter',
  standalone: true,
  imports: [
    BalCard
  ],
  template: `
    <bal-card>
      <p>iseven-setter: isEven: {{isEven}}</p>
    </bal-card>
  `,
})
export class IsevenSetterComponent {
  isEven: boolean | undefined;

  @Input({required: true})
  set counter(c: number) {
    this.isEven = c % 2 === 0;
  }

  // protected readonly count = count;
}
