import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }       from './app.routing';
import { AppComponent } from './app.component';
import { FeatureListComponent } from './features/feature-list/feature-list.component';
import { FeatureComponent } from './features/feature/feature.component';
import { FeatureService } from './features/shared/feature.service';
import { HomeComponent } from './home/home.component';

import { AlertComponent } from '../_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from '../_services/index';
import { LoginComponent } from './login/index';

@NgModule({
  imports: [
  	BrowserModule,
  	FormsModule,
  	routing,
    HttpModule
  ],
  declarations: [
  	AppComponent,
  	FeatureListComponent,
  	FeatureComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent
  ],
  providers: [
  	appRoutingProviders,
    FeatureService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // providers used to create fake backend
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }