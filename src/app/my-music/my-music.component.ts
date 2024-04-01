import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-my-music-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './my-music.component.html',
  styleUrl: './my-music.component.scss',
  providers: [RouterOutlet, Router]
})
export class MyMusicComponent {

}
