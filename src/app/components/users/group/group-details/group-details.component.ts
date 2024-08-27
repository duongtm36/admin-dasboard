import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { employeeDB } from "src/app/shared/data/tables/employee";
import { GROUP, Group } from "src/app/shared/data/tables/group";

@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.component.html",
  styleUrl: "./group-details.component.scss",
})
export class GroupDetailsComponent implements OnInit {
  @Input() group: Group;
  @Input() modalTitle: string = "";
  @Input() item: number[]; // [1,2,3]

  users = employeeDB.emp;
  displayedEmployees = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.displayedEmployees = this.users.filter((user) =>
      this.item.includes(user.id)
    );
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
