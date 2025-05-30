import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpCoreInterceptor implements HttpInterceptor {
    
    constructore() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
            setHeaders: {
                'Conntent-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })

        return next.handle(request)
    }
}

