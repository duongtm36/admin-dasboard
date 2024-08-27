import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Role } from "src/app/shared/data/tables/role";

@Component({
  selector: "app-role-details",
  templateUrl: "./role-details.component.html",
  styleUrls: ["./role-details.component.scss"],
})
export class RoleDetailsComponent implements OnInit {
  @Input() role: Role;
  @Input() modalTitle: string = "";

  constructor(public activeModal: NgbActiveModal) {}

  permissions = [];
  ngOnInit() {
    this.permissions = this.role.permissions;
    console.log(this.permissions);
    console.log(this.role);
  }

  getPermissions(name: string): string {
    switch (name) {
      case "read":
        return "Read";
      case "write":
        return "Write";
      case "update":
        return "Update";
      case "delete":
        return "Delete";
      case "assign_roles":
        return "Assign Roles";
      default:
        return name;
    }
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
