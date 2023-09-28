import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
  private isSignUpSubject = new BehaviorSubject<boolean>(false);

 
  isSignUp$: Observable<boolean> = this.isSignUpSubject.asObservable();

 
  setSignUpValue(value: boolean) {
    this.isSignUpSubject.next(value);
  }
}
