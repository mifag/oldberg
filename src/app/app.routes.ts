import { Routes } from '@angular/router';
import { OldbergComponent } from './oldberg/oldberg.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { ContactsComponent } from './contacts/contacts.component';


export const routes: Routes = [
    { path: 'info', component: OldbergComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'my-music', component: MyMusicComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: '**', redirectTo: '/info' },
];
