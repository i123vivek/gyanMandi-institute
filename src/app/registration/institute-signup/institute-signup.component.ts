import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { InstituteService } from 'src/app/institute.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { InstituteLoginComponent } from '../institute-login/institute-login.component';

@Component({
  selector: 'app-institute-signup',
  templateUrl: './institute-signup.component.html',
  styleUrls: ['./institute-signup.component.css']
})
export class InstituteSignupComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  marked = false;

  signUpForm: FormGroup;

  error_messages = {
    'instituteName': [
      { type: 'required', message: 'Institute Name is required.' },
    ],

    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' }
    ],

    // 'mobile': [
    //   { type: 'required', message: 'please enter a valid Mobile number.' },
    //   { type: 'minlength', message: 'Mobiile Number length.' },
    //   { type: 'maxlength', message: 'Mobiile Number length.' }
    // ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'mobileNumber': [
      { type: 'required', message: 'mobileNumber is required.' },
      { type: 'minlength', message: 'mobileNumber length.' },
      { type: 'maxlength', message: 'mobileNumber length.' }
    ],
  }


  constructor(private modalService: NgbModal, private modalService1: BsModalService, public instituteService: InstituteService,public fb: FormBuilder ,public router: Router, private toastr: ToastrManager, public activeModal: NgbActiveModal) {

    
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      instituteName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      mobileNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      //checkedCheckBox: new FormControl(false)
      
    });
  }

  openOtpModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService1.show(template, { class: 'modal-md' });
  }

  // closeModal() {
  //   if (!this.modalRef) {
  //     return;
  //   }
 
  //   this.modalRef.hide();
  //   this.modalRef = null;
  // }

  get instituteName() {
    return this.signUpForm.get('instituteName').value;
  }

  get mobileNumber() {
    return this.signUpForm.get('mobileNumber').value;
  }

  get email() {
    return this.signUpForm.get('email').value;
  }

  get password() {
    return this.signUpForm.get('password').value;
  }

  toggleVisibility(e){
    //console.log("checked value is", this.marked)
    this.marked= e.target.checked;
    console.log("checked value is", this.marked)
  }

  public goToSignIn: any = () =>{
    this.router.navigate(['/institute/login']);
  } 

  public verifyOtp: any = () =>{
    // function to be written for verifying otp then land to profile page
    this.router.navigate(['/institute/addProfile'])
  }

  public signupFunction: any = () => {
    if (!this.instituteName) {
      this.toastr.warningToastr('enter the institueName');
    } else if (!this.mobileNumber) {
      this.toastr.warningToastr('enter mobile number');
    } else if (!this.email) {
      this.toastr.warningToastr('enter email');
    } else if (!this.password) {
      this.toastr.warningToastr('enter password');
    } else {
      let data = {
        instituteName: this.instituteName,
        mobileNumber: this.mobileNumber,
        email: this.email,
        password: this.password,
      }


      console.log("The data for signup is:", data);
      // this.instituteService.signupFunction(data).subscribe((apiResponse) => {
      //   console.log("the apiResponse for signup is:", apiResponse);

      //   if (apiResponse.status === 200) {
      //     this.toastr.successToastr('Signup successful');
      //     setTimeout(() => {
      //       this.goToSignIn();
      //     }, 2000);
      //   }
      //   else {
      //     this.toastr.errorToastr(apiResponse.message);
      //   }
      // }, (err) => {
      //   this.toastr.errorToastr('some error occured');
      // });
    }
  }

  openLogin(login) {
    const modalRef = this.modalService.open(InstituteLoginComponent);
    modalRef.componentInstance.login = login;
  }

  ngOnDestroy(){
  }

}
