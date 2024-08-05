import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '..';

/*
  Generated class for the TermsConditionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TermsConditionProvider {

  constructor(public http: HttpClient, public api: Api, ) {
    
  }
  terms_conditions() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.get('terms_and_conditions',  { headers: headers }).timeout(10000);

  }

}
