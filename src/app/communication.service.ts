import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  public message = new Subject<any>();

  setMessage(value: any) {
    this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
  }

}
