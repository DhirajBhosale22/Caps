import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the CreatecaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeletemediaProvider {

  constructor(public http: HttpClient, public api: Api) {
   
  }
  deletemedia(deletemedia: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('delete_case_attachment', JSON.stringify(deletemedia), { headers: headers }).timeout(10000);
  }
}
