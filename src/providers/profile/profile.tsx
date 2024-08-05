import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {

  constructor(public http: HttpClient, public api: Api) {
   
  }
  //*************User INFO********************************/
  user_info(userInfo: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('user_info', JSON.stringify(userInfo), { headers: headers }).timeout(10000);
    //return this.api.post('emergency_procedures', JSON.stringify(userInfo), { headers: headers }).timeout(10000);
    
  }

  //*******************Edit Profile*************************/
  edit_info(edit_info: any) {
   
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('edit_profile', JSON.stringify(edit_info), { headers: headers }).timeout(10000);
  }
}
