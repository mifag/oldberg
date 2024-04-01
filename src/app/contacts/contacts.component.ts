import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers: [RouterOutlet, Router]
})
export class ContactsComponent {

}
