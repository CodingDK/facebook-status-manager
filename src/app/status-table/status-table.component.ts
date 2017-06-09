import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { StatusPost } from '../models/statusPost';
import { Paging } from '../models/paging';
import { FeedResponse } from '../models/feedResponse';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {

  items: StatusPost[] = [];
  paging: Paging;

  constructor(private fb: FacebookService) { }

  ngOnInit() {
    this.fb.getLoginStatus()
      .then(resLogin => {
        this.fb.getFeed().then(res => {
          this.items = res.data;
          this.paging = res.paging;
          this.paging.previous = undefined;
          console.log('init:', res);
        });
      });

  }

  previous() {
    console.log('previous clicked', this.paging);
    this.fb.getAPI<FeedResponse>(this.paging.previous).then(res => {
      if (res.paging) {
        this.items = res.data;
        this.paging = res.paging;
      } else {
        this.paging.previous = undefined;
      }
      console.log('response from feed:', res);
    })
  }

  next() {
    this.fb.getAPI<FeedResponse>(this.paging.next).then(res => {
      if (res.paging) {
        this.items = res.data;
        this.paging = res.paging;
      } else {
        res.paging.next = undefined;
      }
      console.log('response from feed:', res);
    })
  }
}
