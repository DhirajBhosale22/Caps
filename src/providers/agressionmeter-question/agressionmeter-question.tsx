import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the AgressionmeterQuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgressionmeterQuestionProvider {

  constructor(public http: HttpClient,public api: Api) {
   
  }
  emergencymerer_question(question) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('meter_of_aggression', JSON.stringify(question), { headers: headers }).timeout(10000);

  }
}
