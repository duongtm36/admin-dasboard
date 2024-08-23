import { Component, Input } from "@angular/core";
import { Admin } from "src/app/shared/data/tables/admin";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-admin-details",
  // standalone: true,
  // imports: [],
  templateUrl: "./admin-details.component.html",
  styleUrl: "./admin-details.component.scss",
})
export class AdminDetailsComponent {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() admin: Admin;
  @Input() modalTitle: string = "";

  ngOnInit() {}

  getRoleDisplayName(role: string): string {
    switch (role) {
      case "admin":
        return "Admin";
      case "superadmin":
        return "Super Admin";
      case "moderator":
        return "Moderator";
      default:
        return role;
    }
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
