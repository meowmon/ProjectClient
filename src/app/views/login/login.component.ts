import { ConstantsService } from './../../common/services/constants.service';
import { UserService } from './../../common/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  submitted = false
  message = ''
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private constant: ConstantsService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',  Validators.required],
      password: ['',  Validators.required]

    }, Validators.required);
  }
  doLogin(){
    this.submitted = true;
    console.log(this.loginForm.value)
    this.userService.doLogin(this.loginForm.value).subscribe(response => {
      this.constant.setUser(response.body)
    },
    (err : HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    )
    
  }
}
