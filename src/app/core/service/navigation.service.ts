import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(private router: Router) {}

  public initializeRouteListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      localStorage.setItem('lastRoute', this.router.url.toString());
    });
  }

  public restoreRoute(): void {
    const lastRoute = localStorage.getItem('lastRoute');
    if (lastRoute) {
      this.router.navigateByUrl(lastRoute);
    }
  }
}
