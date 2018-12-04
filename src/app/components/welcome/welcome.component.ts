import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.route.navigateByUrl('sign-in');
  }

  signUp() {
    this.route.navigateByUrl('sign-up');
  }
}
