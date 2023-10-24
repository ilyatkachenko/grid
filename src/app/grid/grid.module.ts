import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { HeaderColumnComponent } from './header-column/header-column.component';
import { GridService } from './services/grid.service';


@NgModule({
  declarations: [
    GridComponent,
    RowComponent,
    ColumnComponent,
    HeaderColumnComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    GridComponent,
    RowComponent,
    ColumnComponent,
    HeaderColumnComponent,
  ],
  providers: [
    GridService
  ]
})
export class GridModule { }
