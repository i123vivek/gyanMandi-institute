import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { FileUploadModule } from 'ng2-file-upload';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddInstituteProfileComponent } from './add-institute-profile/add-institute-profile.component';



@NgModule({
  declarations: [AddInstituteProfileComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    FileUploadModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class ProfileModule { }
