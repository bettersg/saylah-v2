import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import "@govtechsg/sgds-web-component";
import { NavigationService } from './core/service/navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    // refresh
    this.navigationService.initializeRouteListener();
    this.navigationService.restoreRoute();
  }
  title = 'saylah-v2';
}
