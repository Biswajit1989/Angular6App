//import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
/*import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';*/

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './utils/app-init';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
//import { HomeComponent } from './components/home/home.component';
import { AppAuthGuard } from './app.authguard';
import { AuthGuardService } from './auth-guard.service';

import { HomeModule } from './home/home.module';
import { MemberModule } from './member/member.module';

import { NavbarComponent } from './elements/navbar/navbar.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';
import { TestComponent } from './test/test.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent
    //HomeComponent
  ],
  imports: [
    //BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    MemberModule
    //StoreModule.forRoot({ count: counterReducer })
  ],
  exports: [],
  providers: [
    AuthGuardService,
    AppAuthGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
