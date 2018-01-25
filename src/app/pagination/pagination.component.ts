import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() total = 0;
  @Input() page = 1;
  @Input() perPage = 12;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  get totalPages() {
    return Math.ceil(this.total / this.perPage);
  }

  get nextPage() {
    return this.page + 1;
  }

  get pervPage() {
    return this.page - 1;
  }

  isFirst() {
    return this.page < 1;
  }

  isLast() {
    return this.page === this.totalPages;
  }

  pageChange(page: number): void {
    this.pageChanged.emit(page);
  }

}
