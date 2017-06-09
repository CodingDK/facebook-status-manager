import { Component } from '@angular/core';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FacebookService) { }

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login();
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {
    this.fb.loginWithOptions();
  }

  getLoginStatus() {
    this.fb.getLoginStatus();
  }

  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.getProfile();
  }

  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.getFriends();
  }

  getFeed() {
    this.fb.getFeed()
  }
}
