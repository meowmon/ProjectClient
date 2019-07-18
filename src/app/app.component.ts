import { UserService } from './common/services/user.service';
import { ConstantsService } from './common/services/constants.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  constructor(
    private router: Router,
    private userService:UserService,
  ){
    this.userService.currentUser.subscribe(x => this.user = x)
    if(this.user){
    console.log("current user:" ,this.user.body)
  } else{
      this.router.navigate(['/login']);
  }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
