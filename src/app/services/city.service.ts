import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from '../utlis/api.service';
import { City } from '../model/city.interface';

@Injectable({ providedIn: 'root' })
export class CityService {
  public edit: boolean = false;
  public type: string = "";
  public uuid: string = ''
  public return: string = ""
  private urlBase = environment.publicUrl;
  private url = "city";
  public city!: City; 

  constructor(private api: ApiService) {
  
  }

  setCity(city: City) {
    this.city = city;
  }
  getCity(): City {
    return this.city;
  }
  add(data: City): Observable<any> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
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
  create(data: City): Observable<any> {
    return this.api._post(`${this.url}/new`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  update(data: City): Observable<any> {
    return this.api._post(`${this.url}/${data.uuid}/edit`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }

  getList(page: number | null = null, limit: number | null = null, all: string | null = null): Observable<any> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
        obs.next();
        obs.complete();
      });
    }

    return this.api._get(`${this.url}/`, {
      limit: limit,
      page: page,
      all: all
    }).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }

  getSingle(uuid: string): Observable<City> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
        obs.next();
        obs.complete();
      });
    }

    return this.api._get(`${this.url}/show`, { uuid: uuid }).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  getPrinter(type: string, agencyKey: string, userKey: string, data: any, syndicUuid?: string, uuid?: string): void {
    if (!navigator.onLine) {
      return;
    }

    
  }

 


  getDelete(uuid: string): Observable<any> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
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
