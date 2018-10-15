import { Component, OnInit, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() checkorgStorageData: boolean;

  constructor(
    private keycloak: KeycloakService,
    private _cookie: CookieService
  ) { }

  ngOnInit() {}

  onCheckOrgExist(){
    console.log('navbar....');
    //this.checkorgStorageData = this._cookie.check('orgStorageData');
  }

  async doLogout(){
    this._cookie.deleteAll();
    await this.keycloak.logout();
  }

}
