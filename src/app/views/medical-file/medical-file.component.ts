import { UserService } from 'src/app/common/services/user.service';
import { FilesService } from './../../common/services/files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.css']
})
export class MedicalFileComponent implements OnInit {
  listData:any;
  
  searchText;
  constructor(
    private fileService : FilesService,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.fileService.loadData().subscribe(response =>{
      this.listData = response.body
      this.listData = this.listData.reverse()
      console.log(response.body)
    })
    
  }

  setFilter(input){
    this.searchText = input;
  }
}
