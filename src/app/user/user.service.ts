import { Injectable } from '@angular/core';
import { singleSpaPropsSubject } from '../../single-spa/single-spa-props';
import { ReplaySubject } from 'rxjs';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  preferences: {
    comunication: {
      receiveEmails: boolean;
      receiveTextMessages: boolean;
      receiveMails: boolean;
    };
    site: {
      theme: 'light' | 'dark';
      language: 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt';
    };
  };
};

// Memory User.
// It simulates the user data that would come from an authenticated session.
const user: User = {
  firstName: 'Joana',
  lastName: 'Dark',
  email: 'Joana.Dark@cnh.com',
  avatar: '/public/img/avatar.svg',
  address: {
    street: '711 Jorie Blvd',
    city: 'Oak Brook',
    state: 'IL',
    zipCode: '60523',
  },
  preferences: {
    comunication: {
      receiveEmails: true,
      receiveTextMessages: true,
      receiveMails: false,
    },
    site: {
      theme: 'light',
      language: 'pt',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // use the memory mock when standalone app
  private $user: User = user;

  private userSubject = new ReplaySubject<User>(1);

  private userService: any | undefined;

  constructor() {
    this.userSubject.next(this.$user);

    // only triggered if running as a MFE
    singleSpaPropsSubject.subscribe((props) => {
      this.userService = (props as any).userService;
      this.userService?.getUser().subscribe((user: User) => {
        this.$user = user;
        this.userSubject.next(this.$user);
      });
    });
  }

  getUser = () => this.userSubject;

  setUser(value: User): void {
    this.$user = value;
    this.userService?.setUser(value);
  }
}
