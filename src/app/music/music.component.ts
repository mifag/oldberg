import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-music-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss',
  providers: [RouterOutlet, Router]
})
export class MusicComponent {

}
