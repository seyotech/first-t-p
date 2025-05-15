// import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
// import { AuthService } from "../../../services/auth.services";
// import { inject } from "@angular/core";

// export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
//     // Inject the current `AuthService` and use it to get an authentication token:
//     const authToken = inject(AuthService).isLoggedIn();
//     // Clone the request to add the authentication header.
//     const newReq = req.clone({
//         headers: req.headers.append('X-Authentication-Token', `${authToken}`),
//     });
//     return next(newReq);
// }
import { Injectable } from '@angular/core';
import { AuthService } from '../../../services/auth.services';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = 'asfg' //this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}