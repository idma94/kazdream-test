import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() total = 0;
  @Input() page = 1;
  @Input() perPage = 13;
  @Input() pageRange = 3;
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

  get hasNext() {
    return this.page < this.totalPages;
  }

  get hasPrev() {
    return this.page > 1;
  }

  get rangeStart() {
    const start = this.page - this.pageRange;
    return start > 0 ? start : 1;
  }

  get rangeEnd() {
    const end = this.page + this.pageRange;
    return  end < this.totalPages ? end : this.totalPages;
  }

  get pages() {
    const pages = [];
    for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
      pages.push(i);
    }
    return pages;
  }

  pageChange(page: number): void {
    this.pageChanged.emit(page);
  }

}
