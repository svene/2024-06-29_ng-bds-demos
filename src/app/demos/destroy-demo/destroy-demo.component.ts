import {Component, inject} from '@angular/core';
import {DestroyDemoStore} from "./destroy-demo.store";
import {
  BalCard, BalCardActions,
  BalCardContent,
  BalCardSubtitle,
  BalCardTitle, BalCheckbox,
  BalField,
  BalFieldControl,
  BalFieldLabel
} from "@baloise/ds-angular";
import {LetDirective} from "@ngrx/component";
import {LeakingChildComponent} from "./leaking-child.component";
import {SignalChildComponent} from "./signal-child.component";
import {NgIf} from "@angular/common";
import {DestroyChildComponent} from "./destroy-child.component";

@Component({
  selector: 'app-destroy-demo',
  standalone: true,
  imports: [
    BalCard,
    BalCardTitle,
    BalCardSubtitle,
    BalCardContent,
    BalField,
    BalFieldLabel,
    BalFieldControl,
    BalCheckbox,
    BalCardActions,
    LetDirective,
    LeakingChildComponent,
    SignalChildComponent,
    NgIf,
    DestroyChildComponent
  ],
  providers: [DestroyDemoStore],
  template: `
    <ng-container *ngrxLet="store.vm$ as vm">
    <bal-card class="cmp-card">
      <bal-card-title>{{title}}</bal-card-title>
      <bal-card-subtitle>use toSignal() instead of takeUntil(destroy$)</bal-card-subtitle>
      <bal-card-content>
        <bal-field>
          <bal-field-label>Options</bal-field-label>
          <bal-field-control>
            <bal-checkbox [value]="vm.destroyChildVisible" (balChange)="store.toggleDestroyChild()">Destroy Child</bal-checkbox>
            <bal-checkbox [value]="vm.signalChildVisible" (balChange)="store.toggleSignalChild()">Signal Child</bal-checkbox>
            <bal-checkbox [value]="vm.leakingChildVisible" (balChange)="store.toggleLeakingChild()">Leaking Child</bal-checkbox>
          </bal-field-control>
        </bal-field>
        <bal-card-actions>
        </bal-card-actions>
      </bal-card-content>
    </bal-card>

    <bal-card class="cmp-card">
      <bal-card-title>Content</bal-card-title>
      <bal-card-content>
        <app-destroy-child *ngIf="vm.destroyChildVisible"/>
        <app-signal-child *ngIf="vm.signalChildVisible"/>
        <app-leaking-child *ngIf="vm.leakingChildVisible"/>
      </bal-card-content>
    </bal-card>
    </ng-container>
  `,
  styleUrls: ['destroy-demo.component.scss'],
})
export class DestroyDemoComponent {
  store = inject(DestroyDemoStore)
  title = 'Destroy Demo';

  // constructor(
  //   readonly store: DestroyDemoStore
  // ) {
  // }
}
