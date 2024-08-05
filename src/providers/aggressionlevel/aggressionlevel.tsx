import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import 'rxjs/add/operator/timeout';
/*
  Generated class for the AggressionlevelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AggressionlevelProvider {

  constructor(public http: HttpClient,public api: Api) {
    
  }
  aggression_level(info) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('aggression_level_show_case', JSON.stringify(info), { headers: headers }).timeout(10000) ;

  }


  create_case_aggression_level(info){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('create_case_aggression_level', JSON.stringify(info), { headers: headers });
  }

}
