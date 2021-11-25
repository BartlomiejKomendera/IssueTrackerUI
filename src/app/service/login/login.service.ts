import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string){
    const user = {username, password};
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    
    return this.http.post<any>("http://localhost:8080/authenticate", body, {headers: headers});
  }

  isLoggedIn(){
    return !!this.getJwtToken();
  }

  getJwtToken(){
    return localStorage.getItem('token');
  }

}
