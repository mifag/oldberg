import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-oldberg-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './oldberg.component.html',
  styleUrl: './oldberg.component.scss',
  providers: [RouterOutlet, Router]
})
export class OldbergComponent {

}
