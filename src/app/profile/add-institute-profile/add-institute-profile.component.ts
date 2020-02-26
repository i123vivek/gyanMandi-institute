import { Component, OnInit, OnDestroy, ElementRef, Renderer2, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { from } from 'rxjs';
import * as $ from 'jquery';
import { Location } from "@angular/common";
import { FileUploader } from 'ng2-file-upload';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-institute-profile',
  templateUrl: './add-institute-profile.component.html',
  styleUrls: ['./add-institute-profile.component.css'],
  providers: [Location]
})
export class AddInstituteProfileComponent implements OnInit, OnDestroy {
  ckeConfig: any;
  public Syllabus: string;

  constructor(private location: Location, public toastr: ToastrManager, private _route: ActivatedRoute, private router: Router, private renderer2: Renderer2, @Inject(DOCUMENT) private _document, private el: ElementRef) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      autoParagraph: false,
      //config=TeX-AMS_HTML
      // showWordCount: false,
      // showCharCount: true,
      //enterMode = CKEDITOR.ENTER_BR;
      //,easyimage
      // var mathJaxLib = CKEDITOR.config.mathJaxLib = bender.config.mathJaxLibPath;
      extraPlugins: 'divarea,mathjax',
      //mathJaxClass = 'my-math',
      //extraAllowedContent: this.mathElements.join( ' ' ) + '(*)[*]{*};img[data-mathml,data-custom-editor,role](Wirisformula)',
      mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
      forcePasteAsPlainText: true,
      pasteFromWordRemoveFontStyles: true,

      // cloudServices_tokenUrl:'YOUR_TOKEN_URL',
      //cloudServices_uploadUrl:'YOUR_UPLOAD_URL',

      //   cloudServices: {
      //     tokenUrl: 'http://localhost:4200/',
      //     uploadUrl: 'http://localhost:3000/easyimage/upload/'
      // },
      // toolbar: 'Full',
      // enterMode : CKEDITOR.ENTER_BR,
      // shiftEnterMode: CKEDITOR.ENTER_P,

      

      on: {

        instanceReady: function (evt) {
          var rule = {
            attributeNames: [
              [(/^data-cke-pa-on/), 'on'],
            ],
          };

          evt.editor.dataProcessor.dataFilter.addRules(rule, { applyToAll: true });

        }
      }
    };
  }

  onCkeChange($event: any): void {
    //console.log("onChange",$event);

  }





  ngOnDestroy(){
  }

}
