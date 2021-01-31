import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../data/user';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { TypeUser } from '../../data/type-user';
import { Page } from '../../data/page';
import { InputUser } from '../../data/input-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  
  private pageSubject = new BehaviorSubject<Page<User>>(new Page<User>());
  public loadingPage$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  
  create(input: InputUser): Observable<User> {
    return this.http.post<User>(environment.serverUrl('/users'), input);
  }
  
  getPage(): Observable<Page<User>> {
    return this.pageSubject.asObservable();
  }
  
  getUserById(id): Observable<User> {
    return this.http.get<User>(environment.serverUrl(`/users/${id}`))
  }

  getProfile() {
    return this.http.get<User>(environment.serverUrl('/users/me'))
        .pipe(map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }));
  }

  getTypes() {
    return this.http.get<TypeUser[]>(environment.serverUrl('/users/types'));
  }
  
  getAllUser(page, size, sort, direction, name, profile, type, enabled): void {
    this.loadingSubject.next(true);
    const params = new HttpParams()
      .append('page', page)
      .append('size', size)
      .append('sort', name)
      .append('direction', direction)
      .append('name', name)
      .append('profile', profile)
      .append('type', type)
      .append('enabled', enabled);
    this.http.get<Page<User>>(environment.serverUrl('/users'), { params })
      .pipe(
        catchError(() => of(new Page<User>())),
        finalize(() => this.loadingSubject.next(true))
      ).subscribe(page => {
        this.pageSubject.next(page);
      });
  }

}
