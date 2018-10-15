import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _cookie: CookieService
  ){}

  canActivate() {
    if (this._cookie.check('orgStorageData')) {
      return true;
    } else {
      this._router.navigate(['home']);
      return false;
    }
  }
}
