import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
//import { KeycloakService } from 'keycloak-angular';
import { CookieService } from 'ngx-cookie-service';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDetails: KeycloakProfile;
  title: string = 'Angular Keycloak Application';
  kcToken: string;
  checkorgStorageData: boolean = this._cookie.check('orgStorageData');
  constructor(
    private _cookie: CookieService,
    private _communication: CommunicationService
  ) {}

  ngOnInit() {
    this._communication.message.subscribe((check) => {
      this.checkorgStorageData = check;
    });
    //console.log('ngOnInit - OK');
    //this.kcToken = await this.keycloakService.getToken();
    //this.userDetails = await this.keycloakService.loadUserProfile();
  }

  onCheckOrgExist(){
    //this.checkorgStorageData = this._cookie.check('orgStorageData');
    //console.log(this.checkorgStorageData);
  }

}
