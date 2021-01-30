import { Pageable } from './pageable';
import { Sort } from './sort';

export class Page<E> {
  content: E[];
  pageable: Pageable;
  sort: Sort;
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
