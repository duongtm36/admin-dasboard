import { Component, Input, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from "@ng-bootstrap/ng-bootstrap";
import { ROLE, Role } from "src/app/shared/data/tables/role";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { LoaderService } from "src/app/shared/services/loader.service";
import { TableService } from "src/app/shared/services/table.service";
import { CeateRoleComponent } from "./ceate-role/ceate-role.component";
import { RoleDetailsComponent } from "./role-details/role-details.component";
import { Constants } from "src/app/shared/constants/constant";
import { ConfirmModalComponent } from "src/app/shared/components/modal/confirm/confirm-modal.component";
import { ADMIN } from "src/app/shared/data/tables/admin";

@Component({
  selector: "app-role",
  templateUrl: "./role.component.html",
  styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
  config = {
    total: 0,
    items: [],
    limit: 10,
    fnLabel: "Role",
    activeItem: "Role",
    moduleLabel: "User management",
    breadcrumb: ["Home", "User management"],
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

  role = ROLE;
  admin = ADMIN;
  adminCountByRole: { [key: string]: number } = {};

  // options = [
  //   {
  //     value: "read",
  //     label: "Read",
  //   },
  //   {
  //     value: "write",
  //     label: "Write",
  //   },
  //   {
  //     value: "update",
  //     label: "Update",
  //   },
  //   {
  //     value: "delete",
  //     label: "Delete",
  //   },
  //   {
  //     value: "assign_roles",
  //     label: "Assign Roles",
  //   },
  // ];

  ngOnInit(): void {
    this.getData();
    this.calculateAdminCountByRole();
  }
  calculateAdminCountByRole() {
    this.adminCountByRole = ADMIN.reduce((acc, admin) => {
      acc[admin.role] = (acc[admin.role] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }

  onSort({ column, direction }: SortEvent) {}

  getData() {
    // call api
    this.loaderService.addQueue();
    this.service.setUserData(this.role);
    this.service.tableItem$.subscribe((data) => {
      // console.log(data);

      this.config.items = data;
    });
    this.service.total$.subscribe((total) => {
      // console.log(total);

      this.config.total = total;
    });

    setTimeout(() => {
      this.loaderService.removeQueue();
    }, 2000);
  }

  openModalCreateRole() {
    let modalRef = this.modalService.open(
      CeateRoleComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Create Role";
  }

  openModalUpdateRole(role: Role) {
    let modalRef = this.modalService.open(
      CeateRoleComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Edit " + role.value;
    modalRef.componentInstance.role = role;
    // console.log("group: ", group);
  }

  openModalConfirmDeleteRole(item: Role) {
    let modalRef = this.modalService.open(
      ConfirmModalComponent,
      Constants.modalConfig
    );
    console.log(item);

    modalRef.componentInstance.title = `Confirm Deletion ${item.label}`;
    modalRef.componentInstance.message = `Are you sure you want to delete role ${item.label}?`;
    modalRef.componentInstance.confirmEvent.subscribe(() => {
      // console.log(item);

      this.service.deleteSingleData(item.id);
    });
  }

  openModalDetailsRole(item: Role) {
    let modalRef = this.modalService.open(
      RoleDetailsComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = item.value;
    modalRef.componentInstance.group = item;
  }

  getTotalAccount() {}
  search() {}
}
