import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.css']
})
export class RecordFormComponent implements OnInit {
  userInfo: FormGroup
  examInfo: FormGroup
  gender: string[] = ['Nam', 'Nữ'];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userInfo = this.fb.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      bday: ['', Validators.required],
      gender: [this.gender[0], Validators.required],
      bo_mon: ['', [Validators.required]],
    }, Validators.required);
    this.examInfo = this.fb.group({
      leftEyeIndex: ['', Validators.required],
      rightEyeIndex: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      blood_pressure: ['', Validators.required],
      heart_rate: ['', Validators.required],
      conclude: ['', Validators.required],
      descrip: ['', Validators.required],
      heath_class: ['', Validators.required],
    }, Validators.required);
  }
  onSubmit(){
    console.log(this.examInfo.value)
  }
  getUser(){
    console.log(this.userInfo.controls.code.value)
  }
  getExamInfo(){
    console.log("lay du lieu tu thiet bi")
  }
}
