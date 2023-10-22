import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @HostBinding('class.grid__column') hostClass = true;
}
