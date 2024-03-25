import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent extends ProfileComponent {
  constructor(userService: UserService) {
    super(userService);
  }
}
