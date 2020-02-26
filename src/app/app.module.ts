import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
import { InstitutionHomePageComponent } from './institution-home-page/institution-home-page.component';
import { RegistrationModule } from './registration/registration.module';
import { InstituteService } from './institute.service';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TreeviewModule } from 'ngx-treeview';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { InstituteSignupComponent } from './registration/institute-signup/institute-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    InstitutionHomePageComponent,
    // InstituteSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RegistrationModule,
    ProfileModule,
    HttpClientModule,
    NgxPaginationModule,
    CKEditorModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ToastrModule.forRoot(),
    TreeviewModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [InstituteService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
