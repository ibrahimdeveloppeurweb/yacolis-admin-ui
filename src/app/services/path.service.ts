import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Path } from '../model/path';
import { environment } from 'src/environments/environment';
import { ApiService } from '../utils/api.service';
import { NoInternetHelper } from '../utils/no-internet-helper';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  path: Path;
  public edit: boolean = false;
  private urlBase = environment.publicUrl;
  private url = "private/admin/path";

  constructor(private api: ApiService) {}

  setPath(path: Path) {
    this.path = path
  }

  getPath(): Path {
    return this.path
  }

  getList(type ?: string): Observable<Path[]> {
    if (!navigator.onLine) {
      NoInternetHelper.internet()
      return Observable.create((obs: { next: () => void; complete: () => void; }) => {
        obs.next();
        obs.complete();
      });
    }

    return this.api._get(`${this.url}/`, {type: type}).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }

}
