import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from '../utlis/api.service';
import { Categorie } from '../model/categorie.interface';

@Injectable({ providedIn: 'root' })
export class CategorieService {
  public edit: boolean = false;
  public type: string = "";
  public id: string = ''
  public return: string = ""
  private urlBase = environment.publicUrl;
  private url = "category";
  public categorie!: Categorie; 

  constructor(private api: ApiService) {
  
  }

  setCategorie(categorie: Categorie) {
    this.categorie = categorie;
  }
  getCategorie(): Categorie {
    return this.categorie;
  }
  add(data: Categorie): Observable<any> {
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
  create(data: Categorie): Observable<any> {
    return this.api._post(`${this.url}/create`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  update(data: Categorie): Observable<any> {
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

  getSingle(id: string): Observable<Categorie> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
        obs.next();
        obs.complete();
      });
    }

    return this.api._get(`${this.url}/show/${id}`, { id: id }).pipe(
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
