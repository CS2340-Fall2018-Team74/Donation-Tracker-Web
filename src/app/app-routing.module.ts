import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LocationDetailsComponent} from './components/location-details/location-details.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'location',
    component: LocationDetailsComponent
  }, {
    path: 'welcome',
    component: WelcomeComponent
  }, {
    path: 'sign-in',
    component: SignInComponent
  }, {
    path: 'sign-up',
    component: SignUpComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
