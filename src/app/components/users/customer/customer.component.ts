import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Input } from 'hammerjs';
import { Observable } from 'rxjs';
import { COMPANYDB } from 'src/app/shared/data/tables/company';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { TableService } from 'src/app/shared/services/table.service';
import { CreateCustomerComponent } from './create/create.component';


@Component({
  selector: 'app-user-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CustomerComponent implements OnInit {
  config = {
    moduleLabel: 'User management',
    fnLabel: 'Customers',
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: ['Home', 'User management'],
    activeItem: 'Customers'
  }
  constructor(
    public service: TableService,
    public loaderService: LoaderService,
    public modalconfig: NgbModalConfig,
    public modalService: NgbModal
  ) {
    modalconfig.backdrop = 'static';
    modalconfig.keyboard = false;
  }

  ngOnInit(): void {
    this.getData();
  }

  onSort({ column, direction }: SortEvent) {

  }

  getData() {
    // call api
    this.loaderService.addQueue()

    this.service.tableItem$.subscribe(data => {
      this.config.items = data
    });
    this.service.total$.subscribe(total => {
      this.config.total = total
    });
    this.service.setUserData(COMPANYDB)
    console.log('ok');
    setTimeout(() => {
      this.loaderService.removeQueue()

    }, 2000);

  }

  openModalCreateCustomer() {
    let modalRef = this.modalService.open(CreateCustomerComponent, { backdrop: 'static', size: 'lg', keyboard: true, centered: true });
  }
}