import { Component } from '@angular/core';
import {BalCard} from "@baloise/ds-angular";

@Component({
  selector: 'app-iseven-setter',
  standalone: true,
  imports: [
    BalCard
  ],
  template: `
    <bal-card>
      <p>iseven-setter works!</p>
    </bal-card>
  `,
})
export class IsevenSetterComponent {

}
