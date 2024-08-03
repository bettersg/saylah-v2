import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings/settings.component';
import { EditComponent } from './pages/edit/edit.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SavedInterfacesComponent } from './pages/saved-interfaces/saved-interfaces.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
   {
      path: '',
      component: HomePageComponent
   },
   {
       path: 'auth',
       component: AuthPageComponent
   },
   {
      path: 'home',
      component: LandingComponent
   },
   {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'contact-us',
      component: ContactUsComponent
   },
   {
      path: 'edit',
      component: EditPageComponent,
      canActivate: [ authGuard ]
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'settings',
      component: SettingsComponent,
      canActivate: [ authGuard ]
   },
   {
      path: 'saved-interfaces',
      component: SavedInterfacesComponent,
      canActivate: [ authGuard ]
   },
   {
      path: 'templates',
      component: TemplatesComponent,
      canActivate: [ authGuard ]
   },
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: '**', redirectTo: '', pathMatch: 'full' }
];
