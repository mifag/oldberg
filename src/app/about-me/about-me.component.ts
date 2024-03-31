import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-about-me-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  providers: [RouterOutlet, Router]
})
export class AboutMeComponent {

}
