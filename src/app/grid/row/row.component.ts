import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  @HostBinding('class.grid__row') hostClass = true;
}
