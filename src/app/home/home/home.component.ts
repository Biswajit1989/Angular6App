import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../home.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CommunicationService } from '../../communication.service';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  orgLists: object;
  displayedColumns: string[] = ['orgNo', 'companyName', 'action'];
  @Output() checkOrgExist: EventEmitter<any> = new EventEmitter();
  dob: any = new Date();
  //counter: Observable<number>;
  constructor(
    private home: HomeService,
    private cookie: CookieService,
    private router: Router,
    private _communication: CommunicationService
    //private session: SessionStorageService,
    //private store: Store<AppState>
  ) { 
    
  }

  ngOnInit() {
    //this.counter = this.store.select('count');
    this.getOrganiserLists();
  }

  getOrganiserLists(): void{
    this.home.getOrganiserLists().subscribe(data => {
      this.isLoading = false;
      this.orgLists = data;
    },
    err => {
      this.isLoading = false;
      this.orgLists = {status: false, error: 'Unable to get response from server.'};
    });
  }

  selectOrganisation(row: object, groupNr: number){
    row['groupNr'] = groupNr;
    //this.checkOrgExist.emit();
    this.cookie.set('orgStorageData', JSON.stringify(row));
    this._communication.setMessage(this.cookie.check('orgStorageData'));
    this.router.navigate(['dashboard']);
  }

  get format(){
    return 'shortDate';
  }

  // setCookieData(){
  //   this.cookie.set('name', JSON.stringify({fname: 'Biswajit', lanme: 'Manna'}));
  // }

  // getCookieData(){
  //   console.log(this.cookie.get('name'));
  // }

  // increment() {
  //   this.store.dispatch({ type: INCREMENT });
  // }

  // decrement() {
  //   this.store.dispatch({ type: DECREMENT });
  // }

  // reset() {
  //   this.store.dispatch({ type: RESET });
  // }
}
