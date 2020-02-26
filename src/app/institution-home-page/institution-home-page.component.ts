import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstituteSignupComponent } from '../registration/institute-signup/institute-signup.component';
import { InstituteLoginComponent } from '../registration/institute-login/institute-login.component';

@Component({
  selector: 'app-institution-home-page',
  templateUrl: './institution-home-page.component.html',
  styleUrls: ['./institution-home-page.component.css']
})
export class InstitutionHomePageComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(signUp) {
    const modalRef = this.modalService.open(InstituteSignupComponent);
    modalRef.componentInstance.signUp = signUp;
  }

  openLogin(login) {
    const modalRef = this.modalService.open(InstituteLoginComponent);
    modalRef.componentInstance.login = login;
  }

}
