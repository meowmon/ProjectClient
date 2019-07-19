import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import user from '../config/user.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ='http://localhost:8080/users/'
  boMonUrl ='http://localhost:8080/BoMons/'
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  doLogin(user){
    return this.http.post<user>(this.userUrl + "login", user, { observe: 'response' }).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      if(user){
        if((user.body.role === "nv_yte")){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      }
      return user;
    }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  doChangePassword(input){
    return this.http.post(this.userUrl + "changepass", input ,{ observe: 'response'})
  }

  getAllUser(){
    return this.http.get(this.userUrl,{ observe: 'response' })
  }

  createUser(input){
    return this.http.post(this.userUrl, input, { observe: 'response' } )
  }
  
  editUser(id, input){
    return this.http.put(this.userUrl + id, input, { observe: 'response' })
  }

  getUser(id){
    return this.http.get<user>(this.userUrl +"code/"+ id, { observe: 'response' })
  }

  getBoMon(){
    return this.http.get(this.boMonUrl, { observe: 'response' })
  }
}
