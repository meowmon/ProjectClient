import { FilesService } from './../../common/services/files.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() id: number;
  data;
  BMI;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fileS:FilesService
  ) { }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    if (this.id != 0) {
      this.fileS.seeFile(this.id).subscribe(data => {
        console.log(data.body)
        this.data = data.body
        let smt = this.data.weight * 10000 / (this.data.height * this.data.height)
        this.BMI = Math.round(smt * 100)/100
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
