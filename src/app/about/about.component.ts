import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [RouterOutlet, Router]
})
export class AboutComponent {

}
