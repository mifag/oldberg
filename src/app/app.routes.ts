import { Routes } from '@angular/router';
import { OldbergComponent } from './oldberg/oldberg.component';
import { AboutMeComponent } from './about-me/about-me.component';


export const routes: Routes = [
    { path: 'info', component: OldbergComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: '**', redirectTo: '/info' },
];
