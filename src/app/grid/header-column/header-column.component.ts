import { Component, Input } from '@angular/core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

export interface IHeaderColumn {
  title: string;
  propName: string;
  isSorting?: boolean;
  [key: string]: any;
}

@Component({
  selector: 'header-column',
  templateUrl: './header-column.component.html',
  styleUrls: ['./header-column.component.scss']
})
export class HeaderColumnComponent {
  @Input() column!: IHeaderColumn;

  public sortIcon = faSortUp;
}
