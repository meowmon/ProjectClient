import { ReportComponent } from './views/report/report.component';
import { RecordDetailComponent } from './views/record-detail/record-detail.component';
import { UserRecordsComponent } from './views/user-records/user-records.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { RequestsComponent } from './views/requests/requests.component';
import { RequestFormComponent } from './forms/requestform/requests.component';
import { RecordFormComponent } from './forms/record-form/record-form.component';
import { LoginComponent } from './views/login/login.component';
import { MedicalFileComponent } from './views/medical-file/medical-file.component';
import { BloodExamComponent } from './views/blood-exam/blood-exam.component';
import { XquangComponent } from './views/xquang/xquang.component';
import { SieuAmComponent } from './views/sieu-am/sieu-am.component';

const routes: Routes = [
  {path: '', component:UsersComponent},
  {path: 'request', component:RequestsComponent},
  {path: 'addRequest', component:RequestFormComponent},
  {path: 'addRecord', component:RecordFormComponent},
  {path: 'login', component:LoginComponent},
  {path: 'medicalFiles', component: MedicalFileComponent},
  {path: 'addUser', component:UserFormComponent},
  {path: 'editUser/:id', component:UserFormComponent},
  {path: 'userRecords/:id', component:UserRecordsComponent},
  {path: 'record/:id', component:RecordDetailComponent},
  {path: 'report', component: ReportComponent},
  {path: 'bloodExam', component: BloodExamComponent},
  {path: 'xquang', component: XquangComponent},
  {path: 'sieuam', component: SieuAmComponent},
  {path: 'bloodForm'},
  {path: 'sieuamForm'},
  {path: 'xquangForm'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
