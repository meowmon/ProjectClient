import { ConstantsService } from './common/services/constants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectV2';
  user={};
  constructor(
    private constant: ConstantsService,
  ){
    
  }
  ngOnInit(){
    this.user = this.constant.user 
  }
}
