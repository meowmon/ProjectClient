import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  url = "http://localhost:8080/Notifys/"
  constructor(
    private http: HttpClient
  ) { }

  postNoti(input){
    return this.http.post(this.url, input, {observe: 'response'})
  }

  readNoti(id){
    return this.http.put(this.url +id, { observe: 'response' })
  }

  getUserNoti(id){
    return this.http.get(this.url +'user/'+  id , {observe : 'response'})
  }

  getUnreadNoti(){
    return this.http.get(this.url + 'unread/nvyt', {observe : 'response'})
  }
}
