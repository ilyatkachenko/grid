import { Component, Input, OnInit } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IHeaderColumn } from './header-column/header-column.component';
import { Observable, isObservable, of } from 'rxjs';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() dataSource!: unknown[] | Observable<unknown[]>;
  @Input() headerColumns: IHeaderColumn[] = [];
  @Input() isSticky = false;
  @Input() height!: string;

  public dataSource$!: Observable<unknown[]>;
  public loadingIcon = faSpinner;

  public ngOnInit(): void {
    this.dataSource$ =  isObservable(this.dataSource) ? this.dataSource : of(this.dataSource);
    console.log(this.dataSource);
  }
}
