import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type sortingType = 'ascending' | 'descending' | null;

export interface IColumn {
  title: string;
  propName: string;
  [key: string]: any;
}

export interface ISorting {
  column: string;
  type: sortingType;
}

export interface IGridConfig {
  sorting: ISorting;
  filters: IColumn[];
}

@Injectable()
export class GridService {
  public sorting$ = new Subject<any[]>();
  public gridConfig: IGridConfig = {
    sorting: {
      column: '',
      type: null
    },
    filters: []
  };

  sorting(sortingConfig: ISorting) {
    this.gridConfig.sorting = sortingConfig;
  }
}
