import { Component, EventEmitter, Output } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-confirm-modal",
  templateUrl: "./confirm-modal.component.html",
  styleUrls: ["./confirm-modal.component.scss"],
})
export class ConfirmModalComponent {
  @Output() confirmEvent = new EventEmitter<void>();

  title: string;
  message: string;

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.confirmEvent.emit();
    this.activeModal.dismiss();
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
