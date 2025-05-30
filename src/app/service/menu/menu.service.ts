import { ApiService } from '@theme/utils/api.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Menu } from '@model/menu';
import { Injectable } from '@angular/core';
import { NoInternetHelper } from '@theme/utils/no-internet-helper';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu: Menu;
  public edit: boolean = false;
  private url = 'private/agency/menu';

  constructor(private api: ApiService) {}

  setMenu(menu: Menu) {
    this.menu = menu
  }

  getMenu(): Menu {
    return this.menu
  }

  add(data: Menu): Observable<any> {
    if (!navigator.onLine) {
      NoInternetHelper.internet()
      return Observable.create(obs => {
        obs.next();
        obs.complete();
      });
    }  

    if (data.uuid) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }
  create(data: Menu): Observable<any> {
    return this.api._post(`${this.url}/new`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  update(data: Menu): Observable<any> {
    return this.api._post(`${this.url}/${data.uuid}/edit`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }

  getList(): Observable<Menu[]> {
    if (!navigator.onLine) {
      NoInternetHelper.internet()
      return Observable.create(obs => {
        obs.next();
        obs.complete();
      });
    }  

    return this.api._get(this.url).pipe(
      map((response: any) => { return response }),
      catchError((error: any) => throwError(error))
    );
  }
  getSingle(uuid: string): Observable<Menu> {
    if (!navigator.onLine) {
      NoInternetHelper.internet()
      return Observable.create(obs => {
        obs.next();
        obs.complete();
      });
    }  

    return this.api._get(`${this.url}/show`, {uuid: uuid}).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  getDelete(uuid: string): Observable<Menu> {
    if (!navigator.onLine) {
      NoInternetHelper.internet()
      return Observable.create(obs => {
        obs.next();
        obs.complete();
      });
    }  
    
    return this.api._delete(`${this.url}/${uuid}/delete`).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
}
