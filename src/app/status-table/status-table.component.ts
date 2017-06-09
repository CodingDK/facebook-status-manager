import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { StatusPost } from '../models/statusPost';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent implements OnInit {

  items: StatusPost[] = [];

  constructor(private fb: FacebookService) { }

  ngOnInit() {
    this.fb.getLoginStatus()
      .then(resLogin => {
        this.fb.getFeed().then(res => {
          this.items = res.data;
        });
      });

  }
}
