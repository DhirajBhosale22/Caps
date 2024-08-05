import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the CreatecaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CreatecaseProvider {

  constructor(public http: HttpClient, public api: Api) {
   
  }
  createcase(suspectInfo: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('create_case', JSON.stringify(suspectInfo), { headers: headers });
  }

  CaseInfo(suspectInfo: any) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('show_case', JSON.stringify(suspectInfo), { headers: headers });
  }

  EditCase(suspectInfo: any) {
 

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('edit_case', JSON.stringify(suspectInfo), { headers: headers }).timeout(10000);
  }
}
