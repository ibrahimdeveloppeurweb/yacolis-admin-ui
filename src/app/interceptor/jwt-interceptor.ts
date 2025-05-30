import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthService } from '../service/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token: string | undefined;
  user: any;

  constructor(
    private auth: AuthService
  ) {
    this.user = this.auth.getDataToken() ? this.auth.getDataToken().role : null;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.auth.getDataToken() ? this.auth.getDataToken().role : null;
    if (user) {
      this.token = this.auth.getDataToken().token;
      if (this.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.token}`
          }
        });
      }
    }
    return next.handle(request);
  }
}
