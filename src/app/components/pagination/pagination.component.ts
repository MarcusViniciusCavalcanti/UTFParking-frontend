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
  @Output() changeSize = new EventEmitter<number>();

  asyncPage: Page<any> = new Page<any>();
  pageNumbers: number[] = [];
  sizes: number[] = [5, 10, 25, 50];
  selectedSize = 4;

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
      for (let index = 1; index < 5; index++) {
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
  
  chagenSize(size: number) {
    this.selectedSize = size;
    this.changeSize.emit(size);
  }
}
