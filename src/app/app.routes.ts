import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContributeComponent } from './components/contribute/contribute.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contribute', component: ContributeComponent}
];
