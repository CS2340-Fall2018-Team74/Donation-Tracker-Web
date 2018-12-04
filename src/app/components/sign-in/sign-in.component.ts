import { Component, OnInit } from '@angular/core';
import {User} from '../../@types/user';
import {MockDataService} from '../../services/mock-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: User = new User();
  signInSuccessful = true;
  validSignInInfo = true;

  constructor(private route: Router,
              private _mock: MockDataService) { }

  ngOnInit() {
    this._mock.initializeAccounts();
  }

  signIn() {
    if (this._mock.validateSignInInfo(this.user)) {
      this.validSignInInfo = true;
      if (this._mock.findUser(this.user)) {
        this.signInSuccessful = true;
        this.route.navigateByUrl('dashboard');
      } else {
        this.signInSuccessful = false;
      }
    } else {
      this.validSignInInfo = false;
    }
  }

  goTosignUp() {
    this.route.navigateByUrl('sign-up');
  }
}
