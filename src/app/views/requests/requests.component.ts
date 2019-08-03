import { Router } from '@angular/router';
import { RequestService } from 'src/app/common/services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  listData:any
  confirmedList:any
  requestList:any
  searchText;
  searchText1;
  constructor(
    private requestService: RequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.requestService.loadData().subscribe(response => {
      this.listData = response.body
      console.log(this.listData)
      this.confirmedList = this.listData.filter(function(item){return item.status === "Confirmed"})
      this.requestList = this.listData.filter(function (item) { return item.status === "Waitting" })
    })
  }
}
