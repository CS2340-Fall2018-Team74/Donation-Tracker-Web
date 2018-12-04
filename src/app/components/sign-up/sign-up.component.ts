import { Component, OnInit } from '@angular/core';
import {User} from '../../@types/user';
import {Router} from '@angular/router';
import {MockDataService} from '../../services/mock-data.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new User();
  signUpSuccessful = true;
  validSignUpInfo = true;

  constructor(private route: Router,
              private _mock: MockDataService) { }

  ngOnInit() {
    this._mock.initializeAccounts();
  }

  signUp() {
    if (this._mock.validateSignUpInfo(this.user)) {
      this.validSignUpInfo = true;
      if (this._mock.addUser(this.user)) {
        this.route.navigateByUrl('dashboard');
        this.signUpSuccessful = true;
      } else {
        this.signUpSuccessful = false;
      }
    } else {
      this.validSignUpInfo = false;
    }
  }

  goToSignIn() {
    this.route.navigateByUrl('sign-in');
  }
}

