import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';


/*
  Generated class for the EmergencyProceduresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmergencyProceduresProvider {
  token: any;

  constructor(public http: HttpClient, public api: Api, ) {
    
  }
  emergencyprocedures(token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };

    //return this.api.post('emergency_procedures', JSON.stringify(token), { headers: headers }).timeout(10000);

   //return this.api.post('best_practice_response', JSON.stringify(token), { headers: headers }).timeout(10000);

   // return this.api.post('emergency_procedures', { headers: headers }).timeout(10000);

   return this.api.get('emergency_procedures',token,{ headers: headers }).timeout(10000);

  }

  best_practice_response(token) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('best_practice_response', JSON.stringify(token), { headers: headers }).timeout(10000);

    //return this.api.post('emergency_procedures', JSON.stringify(token), { headers: headers }).timeout(10000);
  }
   
best_practice_exp(user_info){
  var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // let headerOptions: any = { 'Content-Type': 'application/json' };


    return this.api.post('emergency_introduction', JSON.stringify(user_info), { headers: headers }).timeout(10000);
}

}
