import {AccountTypeEnum} from './accountType.enum';

export class User {
  constructor(public name: string = '',
              public email: string = '',
              public password: string = '',
              public accountType: AccountTypeEnum = AccountTypeEnum.USER) {
  }
}
