import { ConstantsService } from './../../common/services/constants.service';
import { UserService } from './../../common/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

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
    private constant: ConstantsService,
    private route: ActivatedRoute,
    private router: Router, 
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
      console.log(response)
      if(response.body.role !== "nv_yte"){
        this.message = "Chức năng dành cho bạn chưa được phát triển, vui lòng truy cập lại sau"
      }
      // window.location.reload()
      

    },
    (err : HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      this.message = "Mã nhân viên hoặc mật khẩu sai"
    }
    );
  }
}
