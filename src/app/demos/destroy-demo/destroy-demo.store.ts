import {ComponentStore} from "@ngrx/component-store";
import {Injectable} from "@angular/core";

export interface DestroyDemoState {
  leakingChildVisible: boolean;
  signalChildVisible: boolean;
  destroyChildVisible: boolean;
}

@Injectable()
export class DestroyDemoStore extends ComponentStore<DestroyDemoState> {
  constructor() {
    super({
      leakingChildVisible: false,
      signalChildVisible: false,
      destroyChildVisible: false,
    });

  }
  readonly toggleSignalChild = this.updater((state) => ({
    ...state,
    signalChildVisible: !state.signalChildVisible,
  }));
  readonly toggleLeakingChild = this.updater((state) => ({
    ...state,
    leakingChildVisible: !state.leakingChildVisible,
  }));
  readonly toggleDestroyChild = this.updater((state) => ({
    ...state,
    destroyChildVisible: !state.destroyChildVisible,
  }));

  readonly vm$ = this.select({
    leakingChildVisible: this.select(state => state.leakingChildVisible),
    signalChildVisible: this.select(state => state.signalChildVisible),
    destroyChildVisible: this.select(state => state.destroyChildVisible),
  });
}
