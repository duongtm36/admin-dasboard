import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { Constants } from "src/app//shared/constants/constant";
import { ADMIN, Admin } from "src/app//shared/data/tables/admin";
import { TableService } from "src/app/shared/services/table.service";
import { LoaderService } from "src/app/shared/services/loader.service";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { CreateAdminComponent } from "./create-admin/create-admin.component";
import { AdminDetailsComponent } from "./admin-details/admin-details.component";
import { ConfirmModalComponent } from "src/app/shared/components/modal/confirm/confirm-modal.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.scss",
})
export class AdminComponent implements OnInit {
  // cấu hình breadcrumb
  config = {
    moduleLabel: "User management",
    fnLabel: "Admin",
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: ["Home", "User management"],
    activeItem: "Admin",
  };
  constructor(
    public service: TableService,
    public loaderService: LoaderService,
    public modalconfig: NgbModalConfig,
    public modalService: NgbModal
  ) {
    modalconfig.backdrop = "static";
    modalconfig.keyboard = false;
  }

  admin = ADMIN;

  ngOnInit(): void {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {}

  getData() {
    // call api
    this.loaderService.addQueue();
    this.service.total$.subscribe((total) => {
      this.config.total = total;
    });
    this.service.setUserData(this.admin);
    this.service.tableItem$.subscribe((data) => {
      // console.log("admin data: ", data);

      this.config.items = data;
    });

    setTimeout(() => {
      this.loaderService.removeQueue();
    }, 2000);
  }

  openModalCreateAdmin() {
    let modalRef = this.modalService.open(
      CreateAdminComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Create Admin";
  }

  openModalUpdateAdmin(admin: Admin) {
    let modalRef = this.modalService.open(
      CreateAdminComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Edit " + admin.username;
    modalRef.componentInstance.admin = admin;
    // console.log("admin: ", admin);
  }

  openModalConfirmDeleteAdmin(item: Admin) {
    let modalRef = this.modalService.open(
      ConfirmModalComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.title = `Confirm Deletion ${item.fullname}`;
    modalRef.componentInstance.message = `Are you sure you want to delete customer ${item.fullname}?`;
    modalRef.componentInstance.confirmEvent.subscribe(() => {
      this.service.deleteSingleData(item.username);
    });
  }

  openModalDetailsAdmin(item: Admin) {
    let modalRef = this.modalService.open(
      AdminDetailsComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = item.fullname;
    modalRef.componentInstance.admin = item;
  }

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

  search() {}
}
