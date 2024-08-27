import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { Constants } from "src/app/shared/constants/constant";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { LoaderService } from "src/app/shared/services/loader.service";
import { TableService } from "src/app/shared/services/table.service";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { ConfirmModalComponent } from "src/app/shared/components/modal/confirm/confirm-modal.component";
import { GroupDetailsComponent } from "./group-details/group-details.component";
import { GROUP, Group } from "../../../shared/data/tables/group";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrl: "./group.component.scss",
})
export class GroupComponent implements OnInit {
  config = {
    moduleLabel: "User management",
    fnLabel: "Group",
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: ["Home", "User management"],
    activeItem: "Group",
  };
  constructor(
    public service: TableService,
    public loaderService: LoaderService,
    public modalconfig: NgbModalConfig,
    public modalService: NgbModal,
    public form: FormBuilder
  ) {
    modalconfig.backdrop = "static";
    modalconfig.keyboard = false;
  }
  group = GROUP;

  ngOnInit(): void {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {}

  getData() {
    // call api
    this.loaderService.addQueue();
    this.service.setUserData(this.group);
    this.service.tableItem$.subscribe((data) => {
      // console.log("customer data: ", data);

      this.config.items = data;
    });
    this.service.total$.subscribe((total) => {
      this.config.total = total;
    });

    setTimeout(() => {
      this.loaderService.removeQueue();
    }, 2000);
  }

  openModalCreateGroup() {
    let modalRef = this.modalService.open(
      CreateGroupComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Create Group";
  }

  openModalUpdateGroup(group: Group) {
    let modalRef = this.modalService.open(
      CreateGroupComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Edit " + group.name;
    modalRef.componentInstance.group = group;
    // console.log("group: ", group);
  }

  openModalConfirmDeleteGroup(item: Group) {
    let modalRef = this.modalService.open(
      ConfirmModalComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.title = `Confirm Deletion ${item.name}`;
    modalRef.componentInstance.message = `Are you sure you want to delete group ${item.name}?`;
    modalRef.componentInstance.confirmEvent.subscribe(() => {
      // console.log(item);

      this.service.deleteSingleData(item.id);
    });
  }

  openModalDetailsGroup(item: Group) {
    let modalRef = this.modalService.open(
      GroupDetailsComponent,
      Constants.modalConfig
    );

    console.log(item);

    modalRef.componentInstance.modalTitle = item.name;
    modalRef.componentInstance.group = item;
    modalRef.componentInstance.item = item.users;
  }

  getTotalUsersInGroup(item: Group) {
    if (!item || !item.users) {
      return 0;
    }
    return item.users.length;
  }

  search() {}
}
