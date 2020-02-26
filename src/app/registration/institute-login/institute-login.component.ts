import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { InstituteService } from 'src/app/institute.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomValidators } from 'ng2-validation';
import { InstituteSignupComponent } from '../institute-signup/institute-signup.component';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  modalRef: BsModalRef;
  loginWithOtpForm: FormGroup;

  constructor(private modalService: NgbModal,private modalService1: BsModalService,public instituteService: InstituteService, public router: Router, public fb: FormBuilder, private toastr: ToastrManager, public activeModal: NgbActiveModal) { }

  ngOnInit() {

    // this.loginForm = new FormGroup({
    //   mobileNumber: new FormControl('', [Validators.required])
    // });

    this.loginForm = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      'password': [null, Validators.required],
      'terms': [false]
    });

    this.loginWithOtpForm = this.fb.group({
      'mobileNumber': [null, Validators.required]
    });
  }

  showModal(template: TemplateRef<any>){
    //{ class: 'modal-sm' }
    this.modalRef = this.modalService1.show(template, { class: 'modal-dialog-centered' });
  }

  openOtpModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService1.show(template, { class: 'modal-md' });
  }

  submitForm() {
    this.markFormTouched(this.loginForm);
    if (this.loginForm.valid) {
      var formValues = this.loginForm.getRawValue;

    } else {
      this.loginForm.controls['terms'].setValue(false);
    }
  };

  markFormTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if (control instanceof FormGroup || control instanceof FormArray) { control.markAsTouched(); this.markFormTouched(control); }
      else { control.markAsTouched(); };
    });
  };

  open(signUp) {
    const modalRef = this.modalService.open(InstituteSignupComponent);
    modalRef.componentInstance.signUp = signUp;
  }

  // get mobileNumber() {
  //   return this.loginForm.get('mobileNumber').value;
  // }

  // public goToSignUp: any = () =>{
  //   this.router.navigate(['/signup']);
  // }

  // public goToSignIn: any = ()=>{
  //   if (!this.mobileNumber) {
  //     this.toastr.warningToastr('enter mobile Number')
  //   } else{
  //     let data = {
  //       mobileNumber: this.mobileNumber
  //     }
  //     console.log('login data is:',data);
  //     // this.instituteService.signinFunction(data).subscribe((apiResponse) =>{

  //     //   if(apiResponse.status === 200){
  //     //     console.log('apiResponse for login is:', apiResponse);

  //     //     this.instituteService.setInstituteInfoInLocalStorage(apiResponse.data);

  //     //     this.router.navigate(['/site/home'])
  //     //   } else {
  //     //     this.toastr.errorToastr(apiResponse.message)
  //     //   }
  //     // },(err) => {
  //     //   this.toastr.errorToastr('some error occured')
  //     // })
  //   }
  // }

  ngOnDestroy(){
  }

}
