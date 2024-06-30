import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BehaviorSubject, interval, Observable, Subject, takeUntil, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-destroy-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="component-container">Destroy Child</div>
  `,
  styles: [
    `
      .component-container {
        color: white;
        background-color: green;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
      }
    `
  ],
})
export class DestroyChildComponent implements OnInit {
  counter$!: Observable<number>;
  id = new Date().getTime()
  destroyRef = inject(DestroyRef);

  constructor() {
    this.counter$ = interval(1000).pipe(
      tap(_ => console.count(`DestroyChild: id: ${this.id}`)),
      takeUntilDestroyed()
    );
  }

  ngOnInit(): void {
    console.log('DestroyChild: ngOnInit');
    const destroyed = new Subject();
    this.destroyRef.onDestroy(() => {
      destroyed.next(undefined);
      destroyed.complete();
    });
    this.counter$.subscribe(_ => {});
  }

}
