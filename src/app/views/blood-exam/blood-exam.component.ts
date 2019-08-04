import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubFileService } from 'src/app/common/services/sub-file.service';

@Component({
  selector: 'app-blood-exam',
  templateUrl: './blood-exam.component.html',
  styleUrls: ['./blood-exam.component.css']
})
export class BloodExamComponent implements OnInit {
  @Input() id:number
  dataForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private sv:SubFileService
  ) { }

  ngOnInit() {
    this.dataForm = this.fb.group({
      rbc : ['',Validators.required],
      wbc : ['',Validators.required],
      hb : ['',Validators.required],
      hct : ['',Validators.required],
      mcv : ['',Validators.required],
      mch : ['',Validators.required],
      blood_class : ['',Validators.required],
      descrip : [''],
      conclude : [''],
      id_hoso: ['',Validators.required],
    })
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.sv.getXNghiem(this.id).subscribe(response =>{
      let data:any = response.body
      this.dataForm.setValue({
      rbc : data.rbc,
      wbc : data.wbc,
      hb : data.hb,
      hct : data.hct,
      mcv : data.mcv,
      mch : data.mch,
      blood_class : data.blood_class,
      descrip : data.descrip,
      conclude : data.conclude,
      id_hoso: data.id_hoso
      })
    })
  }

}
