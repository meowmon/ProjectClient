import { FilesService } from './../../common/services/files.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.css']
})
export class MedicalFileComponent implements OnInit {
  listData:any;
  constructor(
    private fileService : FilesService
  ) { }

  ngOnInit() {
    this.fileService.loadData().subscribe(response =>{
      this.listData = response.body
      console.log(response.body)
    })
  }

}
