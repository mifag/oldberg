import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  providers: [PlayerService]
})
export class PlayerComponent{
  isPlaying: boolean = false;
  volume: number = 1;

  constructor(public playerService: PlayerService) {
    this.isPlaying = this.playerService.isPlaying;
  }

  play(): void {
    this.playerService.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.playerService.pause();
    this.isPlaying = false;
  }

  changeVolume(event: Event): void {
    const target = event.target as HTMLInputElement;
    const volume = parseFloat(target.value);
    this.playerService.changeVolume(volume);
  }
}
