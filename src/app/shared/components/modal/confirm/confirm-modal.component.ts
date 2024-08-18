import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  title: string;
  message: string;

  constructor(public activeModal: NgbActiveModal) { }

  confirm() {


    this.activeModal.dismiss()
  }

  closeModal(content) {
    this.activeModal.dismiss(content)
  }
}

