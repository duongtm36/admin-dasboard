import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from '../../directives/NgbdSortableHeader';
import { TableService } from '../../services/table.service';
import { COMPANYDB, CompanyDB } from '../../data/tables/company';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-data-table',
  templateUrl: './basic-data-table.component.html',
  styleUrls: ['./basic-data-table.component.scss']
})

export class BasicDataTableComponent implements OnInit {

  @Input() config = {
    moduleLabel: '',
    fnLabel: '',
    items: [],
    limit: 10,
    total: 0,
    breadcrumb: [],
    activeItem: '',
  };
  modalContent = '';

  public selected = [];
  public searchText;
  total$: Observable<number>;

  constructor(
    public service: TableService,
    private modalService: NgbModal
  ) {
  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    // this.headers.forEach((header) => {
    //   if (header.sortable !== column) {
    //     header.direction = '';
    //   }
    // });

    // this.service.sortColumn = column;
    // this.service.sortDirection = direction;

  }

  ngOnInit() {
  }

  // deleteData(id: number) {
  //   this.tableItem$.subscribe((data: any) => {
  //     data.map((elem: any, i: any) => { elem.id == id && data.splice(i, 1) })

  //   })
  // }

  openCustomModal(content) {
    content = `<div #content let-c="close" let-d="dismiss">
            <div class="modal-header">
              <h4 class="modal-title" id="modal-basic-title">Hi there!</h4>
              <button type="button" class="btn-close" aria-label="Close" (click)="d('Cross click')"></button>
            </div>
            <div class="modal-body">
              <p>Hello, World!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" (click)="c('Save click')">Save</button>
            </div>
          </div>`
    this.modalService.open(content, { size: 'lg' });
  }
}
