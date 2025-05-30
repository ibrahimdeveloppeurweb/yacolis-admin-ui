import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../model/country.interface';
import { ApiService } from '../utlis/api.service';

@Injectable({ providedIn: 'root' })
export class CountryService {
  public edit: boolean = false;
  public type: string = "";
  public uuid: string = ''
  public return: string = ""
  private urlBase = environment.publicUrl;
  private url = "country";
  public country!: Country; 

  constructor(private api: ApiService) {
  
  }

  setCountry(country: Country) {
    this.country = country;
  }
  getCountry(): Country {
    return this.country;
  }
  add(data: Country): Observable<any> {
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
  create(data: Country): Observable<any> {
    return this.api._post(`${this.url}/new`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  update(data: Country): Observable<any> {
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

  getSingle(uuid: string): Observable<Country> {
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
