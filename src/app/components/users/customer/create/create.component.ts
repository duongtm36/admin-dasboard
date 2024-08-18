import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateCustomerComponent {
  formGroup = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmPassword: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    status: new FormControl<boolean>(true)
  });

  constructor(public activeModal: NgbActiveModal) { }

  create() {
    // call api


    this.activeModal.dismiss()
  }

  closeModal(content) {
    this.activeModal.dismiss(content)
  }
}
