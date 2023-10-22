import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';


@NgModule({
  declarations: [
    GridComponent,
    RowComponent,
    ColumnComponent,
    GridHeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GridComponent,
    RowComponent,
    ColumnComponent,
    GridHeaderComponent
  ]
})
export class GridModule { }
