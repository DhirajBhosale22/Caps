import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactProvider {

  constructor(public http: HttpClient, public api: Api) {
   
  }
  contact(contactInfo: any) {
   
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('feedback', JSON.stringify(contactInfo), { headers: headers }).timeout(10000);
  }


}
