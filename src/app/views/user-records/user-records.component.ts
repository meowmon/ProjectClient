import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FilesService } from './../../common/services/files.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-records',
  templateUrl: './user-records.component.html',
  styleUrls: ['./user-records.component.css']
})
export class UserRecordsComponent implements OnInit {
  @Input() id: number
  userInfo: FormGroup
  listData:any;
  user:any;
  constructor(
    private us: UserService,
    private fileService: FilesService,
    private router: Router,
    private route: ActivatedRoute,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.userInfo = this.fb.group({
      code: [''],
      name: [''],
      birthday: [''],
      gender: [''],
      bo_mon: [''],
      email: [''],
      phone: ['']
    }, Validators.required);
   
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    if (this.id != 0) {
      this.us.getUserId(this.id).subscribe(data =>{
        this.user = data.body
        console.log(this.user)
        this.userInfo.setValue({
          code: data.body.code,
          name: data.body.name,
          birthday: data.body.birthday,
          gender: data.body.gender,
          bo_mon: data.body.bo_mon,
          email: data.body.email,
          phone: data.body.phone,
        })
      })
      this.fileService.getUserFiles(this.id).subscribe(data => {
        console.log(data.body)
        this.listData = data.body
        this.listData = this.listData.reverse()
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

}
