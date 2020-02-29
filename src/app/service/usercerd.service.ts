import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsercerdService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/users';


  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }
  getusers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  createuser(users: User) {
    return this.http.post<User[]>(this.baseUrl, users);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}

