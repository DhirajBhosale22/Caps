import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the DistributionlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DistributionlistProvider {

  constructor(public http: HttpClient, public api: Api) {
    
  }
  //*************Forgot password********************************/
  distribution(userInfo: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('distribution_list', JSON.stringify(userInfo), { headers: headers }).timeout(10000);
  }
  group_info(userInfo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('group_info', JSON.stringify(userInfo), { headers: headers });
  }
  delete_group_contact(userInfo){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('delete_group_contact', JSON.stringify(userInfo), { headers: headers });
  }
  shareGroup_case(case_info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('shareGroup_case', JSON.stringify(case_info), { headers: headers });
  }
  edit_list(edit_info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.api.post('edit_distribution_list', JSON.stringify(edit_info), { headers: headers });
  }
}
