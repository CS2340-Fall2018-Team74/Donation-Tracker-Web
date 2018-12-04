import {Injectable} from '@angular/core';
import {User} from '../@types/user';
import {Item} from '../@types/item';
import {AccountTypeEnum} from '../@types/accountType.enum';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  accounts = new Map<String, User>();
  users = [
    new User('Mai', 'mai@gmail.com', '123456', AccountTypeEnum.USER),
    new User('user', 'user@mail.com', '123456', AccountTypeEnum.USER),
    new User('admin', 'admins@mail.com', '123456', AccountTypeEnum.ADMIN)
  ];

  constructor() {
  }

  initializeAccounts() {
    this.users.forEach((user) => {
      this.accounts.set(user.email, user);
    });
  }

  findUser(user: User): boolean {
    return this.accounts.has(user.email);
  }

  addUser(user: User): boolean {
    if (this.accounts.has(user.email)) {
      return false;
    }
    this.accounts.set(user.email, user);
    return true;
  }

  validateSignUpInfo(user: User): boolean {
    return user.name.length >= 3
      && user.password.length >= 6
      && this.validateEmail(user);
  }

  validateSignInInfo(user: User): boolean {
      return user.password.length >= 6
      && this.validateEmail(user);
  }

  validateEmail(user: User): boolean {
    return user.email.endsWith('.com')
      || user.email.endsWith('.edu')
      || user.email.endsWith('.org')
      || user.email.endsWith('.net');
  }
}
