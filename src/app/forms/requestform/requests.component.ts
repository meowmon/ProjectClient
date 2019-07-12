import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestFormComponent implements OnInit {
  id:number;
  submitted = false;
  userInfo: FormGroup;
  date = new Date(); 
  requestInfo: FormGroup;
  gender: string[] = ['Nam', 'Nữ'];
  timeSession: string[] = ['Sáng' , 'Chiều' , 'Ngoài giờ'];
  valid = false;
  predictFee = 0 ;
  constructor(
    private fb: FormBuilder,
    // private route: ActivatedRoute, 
    // private router: Router, 
    // private modalService: NgbModal, 
    // private studentService: StudentService
  ) { }

  ngOnInit() {
    this.userInfo = this.fb.group({
      code: ['', Validators.required],
      name: ['', [Validators.required]],
      bday: ['', Validators.required],
      gender: [this.gender[0], Validators.required],
      bo_mon: ['', [Validators.required]],
    }, Validators.required);
    this.requestInfo = this.fb.group({
      idUser: ['', Validators.required],
      date: ['', Validators.required],
      time: [this.timeSession[0], Validators.required],
      xnghiem: [false],
      sieuam: [false],
      xquang: [false],
      fee: [0],
      descrip: [''],
    },Validators.required);

    console.log(formatDate(this.date, 'dd-MM-yyyy', 'en-us', '+0700'))
    this.requestInfo.patchValue({
      date: formatDate(this.date, 'yyyy-MM-dd', 'en-us', '+0700')
    })
  }

  checkUser(){
    console.log(this.id)

  }
  getCourse(){
    console.log(this.requestInfo.value)
  }
  xnghiem(){
    if(!this.requestInfo.controls.xnghiem.value){
      this.predictFee = this.predictFee + 80000;
    }else{
      this.predictFee = this.predictFee - 80000;
    }

  }
  sieuam(){
    if (!this.requestInfo.controls.sieuam.value) {
      this.predictFee = this.predictFee + 120000;
    } else {
      this.predictFee = this.predictFee - 120000;
    }
  }
  xquang(){
    if (!this.requestInfo.controls.xquang.value) {
      this.predictFee = this.predictFee + 150000;
    } else {
      this.predictFee = this.predictFee - 150000;
    }
  }

  OnSubmit(){
    console.log(this.userInfo.value)
    console.log(this.requestInfo.value)

  }
}
