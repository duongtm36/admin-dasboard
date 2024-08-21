import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { Constants } from "../../../shared/constants/constant";
import { CreateCustomerComponent } from "./create/create.component";
import { TableService } from "src/app/shared/services/table.service";
import { LoaderService } from "src/app/shared/services/loader.service";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { Customer, CUSTOMER } from "src/app/shared/data/tables/customer";
import { ConfirmModalComponent } from "src/app/shared/components/modal/confirm/confirm-modal.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
@Component({
  selector: "app-user-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
  providers: [NgbModalConfig, NgbModal],
})
export class CustomerComponent implements OnInit {
  // cấu hình breadcrumb
  config = {
    moduleLabel: "User management",
    fnLabel: "Customers",
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: ["Home", "User management"],
    activeItem: "Customers",
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

  customers = CUSTOMER;

  ngOnInit(): void {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {}

  getData() {
    // call api
    this.loaderService.addQueue();

    this.service.tableItem$.subscribe((data) => {
      this.config.items = data;
    });

    this.service.total$.subscribe((total) => {
      this.config.total = total;
    });
    this.service.setUserData(this.customers);

    setTimeout(() => {
      this.loaderService.removeQueue();
    }, 2000);
  }

  openModalCreateCustomer() {
    let modalRef = this.modalService.open(
      CreateCustomerComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Create Customer";
  }

  openModalUpdateCustomer(user: Customer) {
    let modalRef = this.modalService.open(
      CreateCustomerComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = "Edit " + user.username;
    modalRef.componentInstance.user = user;
    console.log("user: ", user);
  }

  openModalConfirmDeleteCustomer(item: Customer) {
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

  openModalDetailsCustomer(item: Customer) {
    let modalRef = this.modalService.open(
      CustomerDetailsComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.modalTitle = item.fullname;
    modalRef.componentInstance.customer = item;
  }

  search() {}
}
