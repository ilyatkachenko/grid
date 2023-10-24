import { Component, Input, inject } from '@angular/core';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { GridService, ISorting } from '../services/grid.service';

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

  private gridService = inject(GridService);

  get sortingConfig(): ISorting {
    return this.gridService?.gridConfig?.sorting;
  }

  get isSortingActive(): boolean {
    return this.sortingConfig.column === this.column.propName;
  }

  get sortIcon() {
    return this.sortingConfig.type === 'descending' && this.sortingConfig.column === this.column.propName
      ? faSortDown
      : faSortUp;
  }

  public sorting(): void {
    if (!this.isSortingActive) {
      this.gridService.sorting({ column: this.column.propName, type: 'ascending' });
    } else if (this.isSortingActive && this.gridService.gridConfig.sorting.type === 'ascending') {
      this.gridService.sorting({ column: this.column.propName, type: 'descending' });
    } else {
      this.gridService.sorting({ column: '', type: null });
    }
  }
}
