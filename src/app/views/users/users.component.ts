import { UserService } from './../../common/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: any
  constructor(
    private UserService:UserService
  ) { }

  ngOnInit() {
    this.UserService.getAllUser().subscribe(response =>{
      this.listUsers = response.body
    })
  }

}
