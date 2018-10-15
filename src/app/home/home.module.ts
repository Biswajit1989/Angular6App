import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { KcTokenInterceptor } from '../interceptors';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { WebStorageModule } from 'ngx-store';

import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    NgbModule.forRoot(),
    SharedModule
    //WebStorageModule
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KcTokenInterceptor,
      multi: true
    }
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule { }
