import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { Constants } from "src/app/shared/constants/constant";
import { CreateCustomerComponent } from "./create/create.component";
import { TableService } from "src/app/shared/services/table.service";
import { LoaderService } from "src/app/shared/services/loader.service";
import { Customer, CUSTOMER } from "src/app/shared/data/tables/customer";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { ConfirmModalComponent } from "src/app/shared/components/modal/confirm/confirm-modal.component";
@Component({
  selector: "app-user-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
  providers: [NgbModalConfig, NgbModal],
})
export class CustomerComponent implements OnInit {
  // cấu hình breadcrumb
  config = {
    total: 0,
    items: [],
    limit: 10,
    fnLabel: "Customers",
    activeItem: "Customers",
    moduleLabel: "User management",
    breadcrumb: ["Home", "User management"],
  };
  constructor(
    public service: TableService,
    public modalService: NgbModal,
    public modalconfig: NgbModalConfig,
    public loaderService: LoaderService
  ) {
    modalconfig.keyboard = false;
    modalconfig.backdrop = "static";
  }
  customer = CUSTOMER;

  ngOnInit(): void {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {}

  getData() {
    // call api
    this.loaderService.addQueue();
    this.service.setUserData(this.customer);
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
    // console.log("user: ", user);
  }

  openModalConfirmDeleteCustomer(item: Customer) {
    let modalRef = this.modalService.open(
      ConfirmModalComponent,
      Constants.modalConfig
    );

    modalRef.componentInstance.title = `Confirm Deletion ${item.fullname}`;
    modalRef.componentInstance.message = `Are you sure you want to delete customer ${item.fullname}?`;
    modalRef.componentInstance.confirmEvent.subscribe(() => {
      this.service.deleteSingleData(item.id);
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
