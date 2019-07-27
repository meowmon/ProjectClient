import { FilesService } from './../../common/services/files.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  data:any;
  datalength = 0;
  male=0;
  female=0;
  problem=0;
  local=0;
  normal=0;
  unnormal=0;
  weak=0;
  extremWeak=0;
  generated = false;
  timeForm: FormGroup
  constructor(
    private fb : FormBuilder,
    private fileS: FilesService
  ) { }

  ngOnInit() {
    this.timeForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate:['', Validators.required],
    })    
  }

  getData(){
    if(this.timeForm.valid){
      this.generated =  true;
      this.fileS.getSession(this.timeForm.controls.startDate.value, this.timeForm.controls.endDate.value).subscribe(response =>{
        console.log(response.body)
        this.data = response.body
        this.datalength = this.data.length;
        console.log(this.data.length)
        this.male = this.data.filter(item => item.gender === "Nam").length;
        this.female = this.data.filter(item => item.gender === "Nữ	").length;
        this.problem = this.data.filter(item => item.reason === "Khám sức khỏe định kỳ").length;
        this.local = this.data.filter(item => item.reason === "Khám theo yêu cầu").length;
        this.normal = this.data.filter(item => item.heath_class === "Khỏe mạnh").length;
        this.unnormal = this.data.filter(item => item.heath_class === "Mắc bệnh thông thường").length;
        this.weak = this.data.filter(item => item.heath_class === "Sức khỏe kém").length;
        this.extremWeak = this.data.filter(item => item.heath_class === "Có vấn đề sức khỏe nghiêm trọng").length;
      })

    }
  }
  
  validate() :Boolean {
    if (this.timeForm.controls.startDate.value > this.timeForm.controls.endDate.value)
      return true;
    else  
      return false;
  }

}
