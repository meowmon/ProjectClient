import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  url="http://localhost:8080/HoSos/"
  constructor(private http:HttpClient) { }

  loadData(){
    return this.http.get(this.url,{observe:'response'})
  }

  seeFile(id){
    return this.http.get(this.url + id, {observe :'response'})
  }

  edit(id,  input ){
    return this.http.put(this.url +id, input, {observe: 'response'})
  }

  postFile(input){
    return this.http.post(this.url, input, {observe : "response"})
  }

  getUserFiles(id){
    return this.http.get(this.url +"userid/" + id, {observe : 'response'})
  }
}
