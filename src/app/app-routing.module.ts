import { UserFormComponent } from './forms/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { RequestsComponent } from './views/requests/requests.component';
import { RequestFormComponent } from './forms/requestform/requests.component';
import { RecordFormComponent } from './forms/record-form/record-form.component';
import { LoginComponent } from './views/login/login.component';
import { MedicalFileComponent } from './views/medical-file/medical-file.component';

const routes: Routes = [
  {path: '', component:UsersComponent},
  {path: 'request', component:RequestsComponent},
  {path: 'addRequest', component:RequestFormComponent},
  {path: 'addRecord', component:RecordFormComponent},
  {path: 'login', component:LoginComponent},
  {path: 'medicalFiles', component: MedicalFileComponent},
  {path: 'addUser', component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
