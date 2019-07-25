import { UserService } from './../../common/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: any
  listBomon: any;
  searchText;
  constructor(
    private UserService:UserService
  ) { }

  ngOnInit() {
    this.UserService.getAllUser().subscribe(response =>{
      let list:any = response.body
      this.listUsers = list.filter(function(item){return item.role !== "nv_yte"})
      console.log(this.listUsers)
    })
    this.UserService.getBoMon().subscribe(response => {
      this.listBomon = response.body
      console.log(response.body)
    })
  }

  setFilter(input){
    this.searchText = input;
  }
}
