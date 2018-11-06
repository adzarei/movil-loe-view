import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class WsErrHandlerInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService,private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError((error) => {
      console.log(error);
      return this.handleAuthError(error);

    }) as any);

  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {

    if (err.status === 401) {
      console.log('handled error ' + err.status);
      //TODO: redirect to login.
      this.router.navigate(['test']);
      return of(err.message);
    }
    throw err;
  }
}
