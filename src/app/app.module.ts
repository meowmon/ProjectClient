import { RequestService } from './common/services/request.service';
import { NotifyService } from './common/services/notify.service';
import { FilesService } from './common/services/files.service';
import { UserService } from './common/services/user.service';
import { ConstantsService } from './common/services/constants.service';
import { HeaderComponent } from './templates/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { UsersComponent } from './views/users/users.component';
import { RequestsComponent } from './views/requests/requests.component';
import { RequestFormComponent } from './forms/requestform/requests.component';
import { LoginComponent } from './views/login/login.component';
import { BloodExamFormComponent } from './forms/blood-exam/blood-exam.component';
import { BloodExamComponent } from './views/blood-exam/blood-exam.component';
import { RecordDetailComponent } from './views/record-detail/record-detail.component';
import { RecordFormComponent } from './forms/record-form/record-form.component';
import { MedicalFileComponent } from './views/medical-file/medical-file.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomPipePipe } from './common/config/custom-pipe.pipe';
import { UserRecordsComponent } from './views/user-records/user-records.component';
import { ReportComponent } from './views/report/report.component';
import { SieuAmComponent } from './views/sieu-am/sieu-am.component';
import { XquangComponent } from './views/xquang/xquang.component';
import { SieuAmFormComponent } from './forms/sieu-am/sieu-am.component';
import { XquangFormComponent } from './forms/xquang/xquang.component';
import { SubFileService } from './common/services/sub-file.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    RequestsComponent,
    LoginComponent,
    BloodExamFormComponent,
    BloodExamComponent,
    RecordDetailComponent,
    RecordFormComponent,
    RequestFormComponent,
    SieuAmFormComponent,
    XquangFormComponent,
    MedicalFileComponent,
    UserFormComponent,
    HeaderComponent,
    CustomPipePipe,
    UserRecordsComponent,
    ReportComponent,
    SieuAmComponent,
    XquangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    ConstantsService,
    UserService,
    FilesService,
    NotifyService,
    RequestService,
    SubFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }