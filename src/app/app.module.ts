import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FacebookService } from 'app/services/facebook.service';
import { FacebookService as FBServiceHandler } from 'ngx-facebook';
import { StatusTableComponent } from './status-table/status-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusTableComponent
  ],
  imports: [
    BrowserModule,
    MomentModule
  ],
  providers: [FacebookService, FBServiceHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
