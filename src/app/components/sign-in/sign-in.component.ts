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
  // user: User = new User();
  signInSuccessful: boolean;
  constructor(private route: Router) { }

  ngOnInit() {
    // this._mockData.initializeAccounts();
  }

  signIn() {
    // console.log(this.user);
    // if (this._mockData.findUser(this.user)) {
    //   this.signInSuccessful = true;
      this.route.navigateByUrl('dashboard');
    // } else {
    //   this.signInSuccessful = false;
    // }
  }

}
