import { Routes } from '@angular/router';
import { ProfileComponent } from './user/profile/profile.component';
import { AddressComponent } from './user/address/address.component';
import { SettingsComponent } from './user/settings/settings.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    component: EmptyRouteComponent,
  },
];
