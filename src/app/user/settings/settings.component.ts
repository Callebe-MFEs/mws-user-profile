import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent extends ProfileComponent {
  constructor(userService: UserService) {
    super(userService);
  }
}
