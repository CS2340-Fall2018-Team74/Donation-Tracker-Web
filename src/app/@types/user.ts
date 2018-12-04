export class User {
  constructor(public name: string = '',
              public email: string = '',
              public password: string = '',
              public accountType: AccountType = AccountType.USER) {}
}
