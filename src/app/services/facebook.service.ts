import { Injectable } from '@angular/core';

import * as moment from 'moment';

import { FacebookService as FBServiceHandler, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { StatusPost } from '../models/statusPost';
import { FeedResponse } from '../models/feedResponse';
import { secrets } from '../../../.secrets';

@Injectable()
export class FacebookService {

  constructor(private fb: FBServiceHandler) {

    const initParams: InitParams = {
      appId: secrets.facebook_appId,
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
  }

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list,user_posts'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    return this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    // try {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch(this.handleError);
    // } catch (e) {
    //  console.log('profile error?', e);
    // }

  }

  /**
   * Get the users friends
   */
  getFriends() {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch(this.handleError);
  }

  getFeed() {
    return this.fb.api('/me/feed')
       .then((res: FeedResponse) => {
        // console.log('Got the users feed', res);
        res.data.forEach(item => {
          item.created_time = moment(item.created_time).toDate()
        });
        return res;
       })
      .catch(this.handleError) as Promise<FeedResponse>;
  }


  private handleError(error) {
    console.error('Error processing action', error);
  }

}

