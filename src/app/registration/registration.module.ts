import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteSignupComponent } from './institute-signup/institute-signup.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { InstituteService } from '../institute.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [InstituteSignupComponent, InstituteLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot()
  ],
  
  providers: [InstituteService],
})
export class RegistrationModule { }
