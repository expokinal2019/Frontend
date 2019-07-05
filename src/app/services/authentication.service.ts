import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  endpoint: string = environment.endpoint;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public setUserToken(user, token) {

  }

  public login(email: string, password: string): Observable<any> {
    return this.http.post(
        `${environment.endpoint}users/login`,
        { email, password}, {headers: this.httpOptions.headers}
      );
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  public signUp(email: string, password: string, name: string, username: string): Observable<any> {
    return this.http.post<any>(
        `${environment.endpoint}users/sign-up`,
        { email, password, name, username}, {headers: this.httpOptions.headers}
      );
  }
}
