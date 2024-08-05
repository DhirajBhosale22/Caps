import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
/*
  Generated class for the OptOutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OptOutProvider {
  constructor(public http: HttpClient, public api: Api) {
    
  }
  //*************subscription********************************/
  opt_out(userInfo: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('optout_user', JSON.stringify(userInfo), { headers: headers }).timeout(10000);
  }
  

}
