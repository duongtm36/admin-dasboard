import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GROUP, Group } from "src/app/shared/data/tables/group";

@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.component.html",
  styleUrl: "./group-details.component.scss",
})
export class GroupDetailsComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  @Input() group: Group;
  @Input() modalTitle: string = "";
  @Input() item: number[]; // [1,2,3]

  groups = GROUP;

  ngOnInit() {}

  filterGroupsById(groups: Group[], ids: number[]): Group[] {
    return groups.filter((group) => ids.includes(group.id));
  }

  closeModal(content) {
    this.activeModal.dismiss(content);
  }
}
