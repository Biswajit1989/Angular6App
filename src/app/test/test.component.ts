import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr: string[] = ['a', 'b', 'c', 'd'];
  fmstexts: any = {
    user: {
      name: 'Biswajit',
      address: {
        city: 'Howrah'
      }
    },
    office: {
      fields: {
        lang1: 'Angular',
        lang2: 'React'
      }
    }
  };
  constructor() { }

  ngOnInit() {
    console.log(_.has(this.fmstexts, 'user.address.city'));
    console.log(_.get(this.fmstexts, 'user.address'));
    //this.arr = _.chunk(this.arr, 2);
  }

}
