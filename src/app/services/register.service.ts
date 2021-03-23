import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs'
import { Register } from '../register/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private regHttp:HttpClient) { }


  formData:Register;
  loginData:Register;
  userData:Register;
  


  readonly ApiUrl ="http://localhost:3500/"
 registerUser(regdata:Register[]) {
   console.log(regdata);
   return this.regHttp.post(this.ApiUrl+'users',regdata);
 }
  
   getUserData():Observable<Register[]>{
     return this.regHttp.get<Register[]>(this.ApiUrl+'users');
   }

  private loginListner = new Subject<any>();

  enableListn() {
    return this.loginListner.asObservable();
  }

}
