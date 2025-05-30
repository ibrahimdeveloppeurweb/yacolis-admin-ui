import { Injectable } from '@angular/core';
import { getFirebaseBackend } from '../authUtils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { environment } from '@env/environment';
import { Router } from '@angular/router';

const URL_BASE = environment.serverUrl;


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component 
 */
export class AuthService {
  user!: any;
  currentUserValue: any;
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
  }

  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(email: string, first_name: string, password: string) {
    return this.http.post(
        URL_BASE + 'signup',
      {
        email,
        first_name,
        password,
      },
      httpOptions
    );
  }

  login(crementials : any) {
    return this.http.post(URL_BASE + '/login',crementials);
  }


  getToken() {
    return localStorage.getItem('token') ?? null;
  }

  saveDataToken(crementials: any) { 
    localStorage.setItem('currentUser', JSON.stringify(crementials.data));
    localStorage.setItem('id', crementials.data.id);
    localStorage.setItem('username', crementials.data.username);
    localStorage.setItem('refresh', crementials.refresh);    
    localStorage.setItem('token', crementials.token);
  }

  public currentUser(): any {
    let valeur = false
    if(localStorage.getItem('token')) {
        valeur = true
    }
    return valeur
  }

  logout() {
    localStorage.clear(); 
    this.router.navigate(['/auth/login']);
  }


  resetPassword(email: string) {
    return getFirebaseBackend()!
      .forgetPassword(email)
      .then((response: any) => {
        const message = response.data;
        return message;
      });
  }
  isLoggedIn() {
    let token  = localStorage.getItem('token')
    return !!token;
  }

  getUser(): any {
    return localStorage.getItem('currentUser');    
  }
}
