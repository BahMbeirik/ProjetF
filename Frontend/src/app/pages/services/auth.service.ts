import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// User interface
export class User {
  name!: String;
  adresse!: String;
  tel!: Number;
  email!: String;
  password!: String;
  password_confirmation!: String;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // User registration
  register(user: User): Observable<any> {
    return this.http.post(`${environment.api}/register`, user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${environment.api}/login`, user);
  }
  
}