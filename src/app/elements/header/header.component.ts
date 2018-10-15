import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  //checkorgStorageData: boolean = this._cookie.check('orgStorageData');
  @Output() checkOrgExist: EventEmitter<any> = new EventEmitter();
  orgStorageData: object = JSON.parse(this._cookie.get('orgStorageData'));
  constructor(
    private _cookie: CookieService,
    private _router: Router,
    private _communication: CommunicationService
  ) { }

  ngOnChanges(change){
    console.log('change', change);
  }

  ngOnInit() {
  }

  changeOrganisation(){
    this._cookie.deleteAll();
    //this.checkOrgExist.emit();
    this._communication.setMessage(this._cookie.check('orgStorageData'));
    this._router.navigate(['home']);
  }

}
