import { Routes } from '@angular/router';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  // { path: '', loadChildren: () => import('./components/home/home.routes').then(m => m.WELCOME_ROUTES) }
];
