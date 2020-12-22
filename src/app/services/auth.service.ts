import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../all/model/user';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubject: BehaviorSubject<User> = null;
  user: Observable<User>;

  apiurl = 'http://localhost:3000/userForm';

  status = false;

  constructor(private router: Router, private http: HttpClient, private loggingService: LoggingService) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password): any {
    return this.http.post<User>(this.apiurl, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout(): any {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    window.alert('You just logged out');
    this.router.navigate(['']);
  }

  // tslint:disable-next-line:typedef
  register(user: User) {
    return this.http.post(this.apiurl, user);
  }

  isLoggedIn(): boolean {
    return this.status;
  }

  // tslint:disable-next-line:typedef
  setStatus(){
    this.status = !this.status;
  }

  create(user): Observable<any> {
    return this.http.post<any>(this.apiurl, user);
  }

  get(): Observable<any> {
    return this.http.get<User[]>(this.apiurl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiurl}/${id}`);
  }

  checkEmail(email: string, password: string): Observable<any>{
    return this.http.get<User>(`${this.apiurl}/?email=${email}&password=${password}`)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  getByEmail(email: string): Observable<any>{
    return this.http.get(`${this.apiurl}/?email=${email}`);
  }

  update(user): Observable<any> {
    return this.http.put<any>(this.apiurl + '/' + user.id , user);
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete(url);
  }
}
