import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import { SortEvent } from "src/app/shared/directives/NgbdSortableHeader";
import { LoaderService } from "src/app/shared/services/loader.service";
import { TableService } from "src/app/shared/services/table.service";
import { TRANSACTION } from "src/app/shared/data/tables/transaction";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  // cấu hình breadcrumb
  config = {
    total: 0,
    items: [],
    limit: 10,
    fnLabel: "History",
    activeItem: "History",
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

  transactions = TRANSACTION;

  ngOnInit() {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {}

  search() {}

  getData() {
    // call api
    this.loaderService.addQueue();
    this.service.setUserData(this.transactions);
    console.log("transc data: ", this.transactions);

    this.service.tableItem$.subscribe((data) => {
      // console.log("transc data: ", data);

      this.config.items = data;
    });
    this.service.total$.subscribe((total) => {
      this.config.total = total;
    });

    setTimeout(() => {
      this.loaderService.removeQueue();
    }, 2000);
  }
}
