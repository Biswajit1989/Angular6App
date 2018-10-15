import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MemberService } from '../member.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  orgStorageData: any;
  profileForm: FormGroup;

  reloadStatus: boolean;
  hasAllStatus: boolean = true;
  statusLists: any = [];

  loadingOrgLists: boolean;
  orgLists: any = [];

  hasAllGrouping: boolean = true;
  reloadGrouping: boolean;
  groupingLists: any = [];

  constructor(
    private fb: FormBuilder,
    private cookie: CookieService,
    private memberService: MemberService,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.orgStorageData = JSON.parse(this.cookie.get('orgStorageData'));
    this.getAllOrg();
    this.profileForm = this.fb.group({
      partOfLastName: ['', [Validators.required]],
      nin: this.fb.group({
        nationalIdentityNumber: ['', [Validators.minLength(11), Validators.maxLength(11)]]
      }),
      fromAge: [''],
      toAge: [''],
      hasConstructedNIN: [true],
      hasActiveCompanyGroup: [false],
      includedCompanies: this.fb.array([])
    });

    this.profileForm.patchValue({
      includedCompanies: [{companyKey: 'tbdtcezqflgff60'}]
    });

    //this.profileForm.value['includedCompanies'] = [{companyKey: 'tbdtcezqflgff60'}];
    //this.profileForm.get('includedCompanies').setValue({companyKey: 'tbdtcezqflgff60'});
    //console.log(this.profileForm.value);
  }

  get formData(){
    return this.profileForm.controls;
  }

  get ninInput(){
    //console.log(this.profileForm.get('nin').get('nationalIdentityNumber'));
    return this.profileForm.get('nin').get('nationalIdentityNumber');
  }

  getAllStatus(e){
    const companyKeys = [];
    companyKeys.push(this.orgStorageData.companyKey);
    this.reloadStatus = true;
    this.memberService.getAllStatus(companyKeys).subscribe(
      data => {
        this.reloadStatus = false;
        if(data.status){
          data.result.map(dt => this.statusLists.push({label: dt.name, value: {statusCode: dt.code}, checked: true}));
        }
      },
      err => console.log(err)
    );
  }

  getAllOrg(){
    this.loadingOrgLists = true;
    this.homeService.getOrganiserLists().subscribe(
      data => {
        this.loadingOrgLists = false;
        if (data.status){
          data.result.map(dt => this.orgLists.push({
            label: dt.organisationalData.companyName, 
            value: {companyKey: dt.organisationalData.companyKey},
            checked: (this.orgStorageData.companyKey === dt.organisationalData.companyKey)
          }));
        }
      },
      err => console.log(err)
    );
  }

  getAllGrouping(){
    console.log(this.profileForm.value);
  }

  getCheckedData(data){
    this.profileForm.value[data.name] = data.values;
  }

  onSearchSubmit(){
    /*this.profileForm.patchValue({
      nin: {
        nationalIdentityNumber: '123456789'
      }
    });*/
    /*this.profileForm.value.includedStatusCodes = this.profileForm.value.includedStatusCodes
      .map((d, i) => d ? this.statusLists[i].code : null)
      .filter(d => d!== null)*/

    console.log(JSON.stringify(this.profileForm.value));
  }

}
