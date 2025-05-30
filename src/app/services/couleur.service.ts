import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiService } from '../utlis/api.service';
import { Categorie } from '../model/categorie.interface';
import { Couleur } from '../model/couleur.interface';

@Injectable({ providedIn: 'root' })
export class CouleurService {
  public edit: boolean = false;
  public type: string = "";
  public id: string = ''
  public return: string = ""
  private urlBase = environment.publicUrl;
  private url = "color";
  public couleur!: Couleur; 

  constructor(private api: ApiService) {
  
  }

  setCouleur(couleur: Couleur) {
    this.couleur = couleur;
  }
  getCouleur(): Couleur {
    return this.couleur;
  }
  add(data: Couleur): Observable<any> {
    if (!navigator.onLine) {
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
        obs.next();
        obs.complete();
      });
    }

    if (data.id) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  }
  create(data: Couleur): Observable<any> {
    return this.api._post(`${this.url}/create`, data).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }
  update(data: Couleur): Observable<any> {
    return this.api._patch(`${this.url}/update/${data.id}`, data).pipe(
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

  getSingle(id: string): Observable<Couleur> {
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
