import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Page } from '../../core/data/page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() page: Page<any>;
  @Output() changePage = new EventEmitter<number>();

  asyncPage: Page<any> = new Page<any>();
  pageNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.asyncPage = this.page;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page']) {
      const currentValue = changes['page'].currentValue;
      this.asyncPage = currentValue;
      this.pageNumber(currentValue);
    }
  }

  pageNumber(page: Page<any>): void {
    if (!this.pageNumbers.includes(page.number + 1)) {
      this.pageNumbers = [];
      const total = page.totalPages;
      for (let index = 1; index > total || index < 5; index++) {
        this.pageNumbers.push(
          page.number + index,
        );
      }
    }
  }

  change(numberPage: number) {
    this.changePage.emit(numberPage -  1);
  }

  prevision() {
    if (!this.asyncPage.first) {
      this.changePage.emit(this.asyncPage.number - 1);
    }
  }

  next() {
    if (!this.asyncPage.last) {
      this.changePage.emit(this.asyncPage.number + 1);
    }
  }
}
