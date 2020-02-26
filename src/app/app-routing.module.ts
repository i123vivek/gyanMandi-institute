import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionHomePageComponent } from './institution-home-page/institution-home-page.component';
import { InstituteSignupComponent } from './registration/institute-signup/institute-signup.component';
import { InstituteLoginComponent } from './registration/institute-login/institute-login.component';
import { AddInstituteProfileComponent } from './profile/add-institute-profile/add-institute-profile.component';


const routes: Routes = [
  { path: 'institute/registration', component: InstituteSignupComponent},
  { path: 'institute/login', component: InstituteLoginComponent},
  { path: 'institute/addProfile', component: AddInstituteProfileComponent}, // to be passed some id generated after registration.
  { path: 'institutionHomePage', component: InstitutionHomePageComponent},
  { path: '', redirectTo: '/institutionHomePage', pathMatch: 'full'},
  { path: '*', redirectTo: '/institutionHomePage' },
  { path: '**', redirectTo: '/institutionHomePage' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
