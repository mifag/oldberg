import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  audio: HTMLAudioElement;
  isPlaying: boolean = false;
  musicSource: string = './../../assets/music/Oldberg-summer.mp3';
  volume: number = 1;
//   playbackPosition: number = 0;

  constructor(private router: Router) {
    this.audio = new Audio();
    this.audio.src = this.musicSource;
    this.volume = 0.3;

//     // Pause music when navigating to another page
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationStart) {
//         this.pause();
//       }
//       if (event instanceof NavigationEnd) {
//         this.resume();
//       }
//     });

//     this.audio.onpause = () => {
//       this.playbackPosition = this.audio.currentTime;
//     };
  }

  play(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  pause(): void {
    this.audio.pause();
    this.isPlaying = false;
  }
//
//   resume(): void {
//     if (this.isPlaying) {
//       this.audio.currentTime = this.playbackPosition;
//       this.audio.play();
//     }
//   }

  changeVolume(volume: number): void {
    if (this.isPlaying) {
    this.audio.volume = volume;
    this.volume = volume;
    }
  }
}
