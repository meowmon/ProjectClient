import { element } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../common/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() id: number
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
    private router: Router,
    private route: ActivatedRoute
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
    this.id = +this.route.snapshot.paramMap.get('id');
  console.log(this.id)
  if(this.id != 0){
    this.us.getUserId(this.id).subscribe(data => {
      console.log(data)
      this.userForm.patchValue({
        name : data.body.name,
        code : data.body.code,
        birthday : data.body.birthday,
        phone: data.body.phone,
        gender : data.body.gender,
        id_bomon : data.body.id_bomon,
        role : data.body.role
      })
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    })
    
  } 
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
      if (this.id != 0){
        this.us.editUser(this.id, this.userForm.value).subscribe();
        this.router.navigate([''])
      }
      else{
      this.us.createUser(this.userForm.value).subscribe(reponse =>{
        console.log(reponse)
        this.router.navigate([''])
        // location.reload()
      })
    }
    }

  }
}
