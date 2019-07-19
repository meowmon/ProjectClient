import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'http://localhost:8080/Requests'
  constructor(
    private http: HttpClient
  ) { }
  
  loadData(){
    return this.http.get(this.url, { observe : 'response'})
  }

  addRequest(input){
    return this.http.post(this.url, input, {observe : 'response'})
  }

  changeRequest(id, input){
    return this.http.put(this.url + id, input, { observe: 'response' })
  }

  getRequest(id){
    return this.http.get(this.url + id, { observe: 'response' })
  }

  getUserRequest(id){
    return this.http.get(this.url + "userid/" + id, { observe: 'response' })

  }
}
