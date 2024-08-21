import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { CUSTOMER, Customer } from "../../../../shared/data/tables/customer";

@Component({
  selector: "app-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.scss"],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() customer: Customer;
  @Input() modalTitle: string = "";

  ngOnInit() {}

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
