import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, debounceTime, delay } from 'rxjs';
import { IHeaderColumn } from './grid/header-column/header-column.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private http = inject(HttpClient);

  title = 'angular16-test';
  clients$: Observable<any> = this.http.get('/api/clients').pipe(delay(3000));
  headerColumns: IHeaderColumn[] = [
    {
      title: 'First name',
      propName: 'first_name'
    },
    {
      title: 'Last name',
      propName: 'last_name'
    },
    {
      title: 'Email',
      propName: 'email'
    },
    {
      title: 'Totem animal',
      propName: 'animal'
    }
  ];
}
