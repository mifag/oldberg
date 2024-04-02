import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [Router]
})
export class AppComponent {
  title = 'oldberg';

  constructor(private router: Router) {

  }

  navigateToInfo(): void {
    this.router.navigate(['/info']);
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  navigateToMusic(): void {
    this.router.navigate(['/music']);
  }

  navigateToContacts(): void {
    this.router.navigate(['/contacts']);
  }
}
