import { FilesService } from './../../common/services/files.service';
import { UserService } from './../../common/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  userInfo: FormGroup
  examInfo: FormGroup
  gender: string[] = ['Nam', 'Nữ'];
  id;
  date = new Date();
  message: String;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private filesService: FilesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userInfo = this.fb.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      birthday: ['', Validators.required],
      gender: [this.gender[0], Validators.required],
      bo_mon: ['', [Validators.required]],
    }, Validators.required);
    this.examInfo = this.fb.group({
      idUser: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      gender: [''],
      leftEyeIndex: ['', Validators.required],
      rightEyeIndex: ['', Validators.required],
      height: ['', Validators.required],
      date:['', Validators.required],
      weight: ['', Validators.required],
      blood_pressure: ['', Validators.required],
      heart_rate: ['', Validators.required],
      conclude: [''],
      descrip: [''],
      heath_class: ['Khỏe mạnh', Validators.required],
      reason: ['Khám sức khỏe định kỳ', Validators.required],
    }, Validators.required);
  }
  onSubmit(){
    console.log(this.examInfo.value)
    this.examInfo.patchValue({
      date: formatDate(this.date, 'yyyy-MM-dd', 'en-us', '+0700')
    })
    if(this.examInfo.valid){
      this.filesService.postFile(this.examInfo.value).subscribe(response => {
        console.log(response)
        this.router.navigate(['/medicalFiles'])
      })
    }
  }
  getUser() {
    console.log(this.userInfo.controls.code.value)
    this.userService.getUser(this.userInfo.controls.code.value).subscribe(response => {
      console.log(response.body)
      if(response.body == null)
      { this.message = "Không tìm thấy mã " + this.userInfo.controls.code.value}
      else{
        this.message = ""
        this.userInfo.setValue({
          code: response.body.code,
          name: response.body.name,
          birthday: response.body.birthday,
          gender: response.body.gender,
          bo_mon: response.body.bo_mon
        })

        this.examInfo.patchValue({
          idUser: response.body.id,
          code: response.body.code,
          name: response.body.name,
          gender: response.body.gender,
        })
        
      }
    })

  }
  getExamInfo(){
    console.log("lay du lieu tu thiet bi")
  }
}
