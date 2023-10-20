import { Component } from '@angular/core';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
 public sortIcon = faSortUp;
}
