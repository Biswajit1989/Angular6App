import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { error } from 'util';

@Injectable()
export class KcTokenInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({
      setHeaders: {
        'CustomHeader1': '1',
        'CustomHeader2': '2'
      },
      withCredentials: true
    });

    return next.handle(req).pipe(
      map(
        response => {
          if (response instanceof HttpResponse){
            let responseBody = {};
            if (response.body.errorList === null){
              responseBody = {status: true, result: response.body.result};
            } else {
              responseBody = {status: false, error: 'error in results'};
            }
            response = response.clone<any>({
              body: responseBody
            });
            return response;
          }
        }
      )/*,
      catchError((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log('catchError interceptor', error);
        //this.handleAuthError(error);
        error.message = 'Custom HttpErrorResponse';
        return of(error);
      })*/
    );
  }

}