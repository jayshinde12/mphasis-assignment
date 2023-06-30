import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpData } from './sign-up-data';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  constructor(private http: HttpClient) { }

  getData(lastNameLength:number): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/photos/';
    return this.http.get<any>(url+lastNameLength)
  }
  postData(signUpData:SignUpData): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users'; 
    return this.http.post(url, signUpData)
  }
}
