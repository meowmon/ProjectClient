import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ='http://localhost:3000/users'
  boMonUrl=''
  constructor(private http: HttpClient) {}

  doLogin(user){
    return this.http.post(this.userUrl, {
      name: user.username,
      password: user.password
    }, { observe: 'response' })
  }
}
