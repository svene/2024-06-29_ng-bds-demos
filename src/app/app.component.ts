import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BalApp, BalButton, BalFooter, BalHeading, BalTabItem, BalTabs} from "@baloise/ds-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, BalApp, BalHeading, BalButton, BalFooter,  BalTabItem, BalTabs],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '2024-06-29_ng-bds-demos';

}
