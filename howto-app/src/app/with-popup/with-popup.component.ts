import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-with-popup',
  templateUrl: './with-popup.component.html',
  styleUrls: ['./with-popup.component.scss']
})
export class WithPopupComponent implements OnInit {

  modalRef : BsModalRef | null=null; //currentModalRef
  
  dataSample = {
    text: "aaa",
    color : "black"
  }

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any> , size : "sm" | "md" | "lg" = "md") {
      this.modalRef = this.modalService.show(template, { /*id: 1,*/ class: 'modal-' + size });
    }
  openSmallModal(template: TemplateRef<any> ) {
    this.openModal(template,"sm");
  }
  openLargeModal(template: TemplateRef<any> ) {
    this.openModal(template,"lg");
  }
  
  closeModal() {
      if (this.modalRef != null) {
        this.modalRef.hide();
        this.modalRef = null;
      }
  }

  ngOnInit(): void {
  }

}
