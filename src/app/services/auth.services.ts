import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
//   getAuthToken
  isLoggedIn(): Observable<boolean>{
    return of(true).pipe(delay(500))
  }

  hasPermission(): Observable<boolean>{
    return of(false).pipe(delay(500))
  }
}
