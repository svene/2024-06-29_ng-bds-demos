import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BalApp, BalButton, BalFooter, BalHeading, BalTabItem, BalTabs} from "@baloise/ds-angular";
import {DestroyDemoComponent} from "./demos/destroy-demo/destroy-demo.component";
import {SignalInputDemoComponent} from "./demos/signal-input-demo/signal-input-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, BalApp, BalHeading, BalButton, BalFooter, BalTabItem, BalTabs, DestroyDemoComponent, SignalInputDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2024-06-29_ng-bds-demos';

}
