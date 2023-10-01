// design-visibility.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  private showDesignSubject = new BehaviorSubject<boolean>(true);

  setShowDesign(value: boolean) {
    debugger
    this.showDesignSubject.next(value);
  }

  getShowDesign(): Observable<boolean> {
        debugger
    return this.showDesignSubject.asObservable();
  }
}
