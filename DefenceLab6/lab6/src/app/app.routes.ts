import { Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component';
import { UsersComponent } from './users-component/users-component';
import { UserDetailComponent } from './user-detail-component/user-detail-component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailComponent }
];