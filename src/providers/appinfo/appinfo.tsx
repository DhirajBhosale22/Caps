import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the AppinfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppinfoProvider {

  constructor(public http: HttpClient,public api: Api) {
   
  }
  app_info(){
    return this.api.get('app_info','');
  }
}

