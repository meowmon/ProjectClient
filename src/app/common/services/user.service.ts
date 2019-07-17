import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ='http://localhost:8080/users/'
  boMonUrl ='http://localhost:8080/BoMons/'
  constructor(private http: HttpClient) {}

  doLogin(user){
    return this.http.post(this.userUrl + "login", {
      name: user.username,
      password: user.password
    }, { observe: 'response' })
  }

  doChangePassword(input){
    return this.http.post(this.userUrl + "changepass", input ,{ observe: 'response'})
  }

  getAllUser(){
    return this.http.get(this.userUrl)
  }

  createUser(input){
    return this.http.post(this.userUrl, input, { observe: 'response' } )
  }
  
  editUser(id, input){
    return this.http.put(this.userUrl + id, input, { observe: 'response' })
  }

  getUser(id){
    return this.http.get(this.userUrl + id, { observe: 'response' })
  }

  getBoMon(){
    return this.http.get(this.boMonUrl)
  }
}
