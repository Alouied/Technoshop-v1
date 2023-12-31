import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../User';
import { UserLogin } from '../UserLogin';
import { LoginResponse } from '../LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  baseUrl = "http://localhost:6002";
  forgotUrl = "http://localhost:6002/forgotPassword";
  constructor(private httpClient : HttpClient) { }


  //Post Methode to Send CreatedUser To MongoDB
  addUser(user?:User):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}/register`,user);
  }



  //Post Methode to Login
  Login(userLogin?: UserLogin): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.baseUrl}/authenticate`, userLogin).pipe(
      tap(response => {
        const token = response.jwt.toString();
        localStorage.setItem('Token', token);
      })
    );
  }

  //Get Method to pubilsh secret message 
  hello():Observable<Object>{
      // Retrieve the token from wherever it is stored (e.g., local storage, session storage)
      const token = localStorage.getItem('Token');
      
      // Create the headers object and set the Authorization header with the token
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   
      // Make the GET request with the headers
      return this.httpClient.get<Object>(`${this.baseUrl}/api/hello`, { headers });   
  }

  ForgotPassword(adress?: any): Observable<string> {
    const url = `${this.forgotUrl}/${adress}`;
    console.log(url);
    alert("An email verification link will be sent to you")
    return this.httpClient.get<string>(`${this.forgotUrl}/${adress}`);
  }
}
