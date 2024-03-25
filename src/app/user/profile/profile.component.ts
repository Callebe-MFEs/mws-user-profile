import { Component } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    preferences: {
      comunication: {
        receiveEmails: true,
        receiveTextMessages: true,
        receiveMails: true,
      },
      site: {
        theme: 'light',
        language: 'en',
      },
    },
  };

  constructor(protected userService: UserService) {
    this.userService.user().subscribe((u) => (this.user = u));
  }
}
