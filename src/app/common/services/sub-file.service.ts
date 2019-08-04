import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubFileService {
  urlXNghiem="http://localhost:8080/XNghiems/"
  urlSieuam="http://localhost:8080/Sieuams/"
  urlXquang="http://localhost:8080/XQuangs/"

  constructor(private http:HttpClient) { }

  addSieuam(input){
    return this.http.post(this.urlSieuam, input, {observe : 'response'})
  }
  addXNghiem(input){
    return this.http.post(this.urlXNghiem, input, {observe : 'response'})
  }
  addXQuang(input){
    return this.http.post(this.urlXquang, input, {observe : 'response'})
  }
  getSieuam(id){
    return this.http.get(this.urlSieuam +"record/" + id, {observe : 'response'})
  }
  getXQuang(id){
    return this.http.get(this.urlXquang +"record/" + id, {observe : 'response'})
  }
  getXNghiem(id){
    return this.http.get(this.urlXNghiem +"record/" + id, {observe : 'response'})
  }
  hadSRecord(id){
    return this.http.put(this.urlSieuam + "hasRecord/" + id,{},{observe : 'response'})
  }
  hadXNRecord(id){
    return this.http.put(this.urlXNghiem + "hasRecord/" + id,{},{observe : 'response'})
  }
  hadXQRecord(id){
    return this.http.put(this.urlXquang + "hasRecord/" + id,{},{observe : 'response'})
  }
}
