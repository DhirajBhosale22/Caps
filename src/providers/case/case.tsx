import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';


/*
  Generated class for the CaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CaseProvider {

  constructor(public http: HttpClient, public api: Api) {
   
  }
  my_cases(token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('user_created_cases', JSON.stringify(token), { headers: headers }).timeout(10000);

  }
  shared_cases(user_info) {
   
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      // let headerOptions: any = { 'Content-Type': 'application/json' };


      return this.api.post('shared_cases', JSON.stringify(user_info), { headers: headers }).timeout(10000);
  

  }


  nocaps_shareCase(user_info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('shareCase_byEmail', JSON.stringify(user_info), { headers: headers }).timeout(10000);
  }

  shareCase_contact_details(user_info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('shareCase_contact_details', JSON.stringify(user_info), { headers: headers }).timeout(10000);
  }


}
