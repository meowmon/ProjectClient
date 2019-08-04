import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubFileService } from 'src/app/common/services/sub-file.service';

@Component({
  selector: 'app-blood-exam',
  templateUrl: './blood-exam.component.html',
  styleUrls: ['./blood-exam.component.css']
})
export class BloodExamFormComponent implements OnInit {
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
    this.dataForm.patchValue({
      id_hoso : this.id,
    })
  }

  onSubmit(){
    console.log(this.dataForm.value)
    if(this.dataForm.valid){
      // this.sv.addXNghiem(this.dataForm.value).subscribe(data => {});
      this.sv.hadXNRecord(this.id).subscribe(data => {});
      this.router.navigate(['/bloodExam/'+this.id])
    }
  }

}
