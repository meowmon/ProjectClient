import { element } from 'protractor';
import { Router } from '@angular/router';
import { UserService } from './../../common/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  gender: string[] = ['Nam', 'Nữ'];
  roles = [
    { value:'giao_vien', name:"Giáo viên"},
    { value:'nv_yte', name:"Nhân viên y tế"},
    { value:'ban_giam_hieu', name:"Ban giám hiệu"}]
  bo_mons:any
  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      birthday: ['', Validators.required],
      gender: [this.gender[0], Validators.required],
      phone: ['', Validators.required],
      bo_mon: ['', [Validators.required]],
      id_bomon: ['', Validators.required],
      role: [this.roles[0].value, Validators.required],
    }, Validators.required);
    this.us.getBoMon().subscribe(response => {
      console.log(response.body)
      this.bo_mons = response.body
    })
  }

  setBomon(){
    let bomon = this.bo_mons[this.userForm.controls.id_bomon.value - 1].name
    console.log(bomon)
    this.userForm.patchValue({
      bo_mon : bomon
    })
  }
  onSubmit(){
    this.setBomon()
    console.log(this.userForm)
    if(this.userForm.valid){
      this.us.createUser(this.userForm.value).subscribe(reponse =>{
        console.log(reponse)
        this.router.navigate([''])
        // location.reload()
      })
    }

  }
}
