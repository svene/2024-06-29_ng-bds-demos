import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BalCard, BalCardContent, BalCardTitle} from "@baloise/ds-angular";
import {count} from "rxjs";

@Component({
  selector: 'app-iseven-onchanges',
  standalone: true,
  imports: [
    BalCard,
    BalCardTitle,
    BalCardContent
  ],
  template: `
    <bal-card>
      <bal-card-title>IsEven OnChanges</bal-card-title>
      <bal-card-content>
        <p>isEven: {{ isEven }}</p>
      </bal-card-content>
    </bal-card>
  `,
})
export class IsEvenOnChangesComponent implements OnChanges {
  isEven: boolean | undefined;

  @Input({required: true})
  counter!: number

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['counter']) {
      this.isEven = this.counter % 2 === 0;
    }
  }

}
