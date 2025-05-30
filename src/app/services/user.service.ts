import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { catchError, map, throwError } from 'rxjs';
import { User } from '../model/user.interface';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  user: User | undefined;
  public edit: boolean = false;

  private urlBase = environment.serverUrl;
  constructor(private http: HttpClient) {}

  setUser(user: User) {
    this.user = user;
  }

   /***
   * Reccuperer le user passé en parametre
   */
  getCurrenUser() {
    return this.user;
  }

  /***
   * Get All User
   */
  getAll() {
    return this.http.get<User[]>(`${this.urlBase}/user`).pipe(
      map((response: any) => response),
      catchError((error: any) => throwError(error))
    );
  }

  /***
   * Creer un  User 
   */
  register(user: User) {
    return this.http.post(`/users/register`, user);
  }

  getSingle(user: User) {
    return this.http.post(`/users/register`, user);
  }
}
