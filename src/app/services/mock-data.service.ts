import { Injectable } from '@angular/core';
import {User} from '../@types/user';
import {Item} from '../@types/item';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  accounts = new Map<String, User>();
  // users = [
  //   new User('Mai', 'mai@mail.com', '123456'),
  //   new User('user', 'user@mail.com', '123456'),
  //   new User('admin', 'admins@mail.com', '123456')
  // ];

  constructor() { }
  // initializeAccounts() {
  //   this.users.forEach((user) => {
  //     this.accounts.set(user.email, user);
  //   });
  // }

  findUser(user: User): boolean {
    return this.accounts.has(user.email);
  }

  // addUser(user: User): boolean {
  //   if (this.accounts.has(user.email)) {
  //     return false;
  //   }
  //   this.accounts.set(user.email, user);
  //   return true;
  // }

}
