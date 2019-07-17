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
  bo_mons = []
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      bday: ['', Validators.required],
      gender: [this.gender[0], Validators.required],
      phone: ['', Validators.required],
      bo_mon: ['', [Validators.required]],
      role: [this.roles[0].value, Validators.required],
    }, Validators.required);
  }

  onSubmit(){
    console.log(this.userForm.value)
  }
}
