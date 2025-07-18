import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { sellerModel } from './seller-overview.model';

export type SortColumn = keyof sellerModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface sellerSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sellersortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSellerOverviewSortableHeader {

  @Input() sellersortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sellersort = new EventEmitter<sellerSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sellersort.emit({ column: this.sellersortable, direction: this.direction });
  }
}
