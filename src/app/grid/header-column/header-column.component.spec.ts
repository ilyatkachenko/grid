import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColumnComponent } from './header-column.component';

describe('HeaderColumnComponent', () => {
  let component: HeaderColumnComponent;
  let fixture: ComponentFixture<HeaderColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderColumnComponent]
    });
    fixture = TestBed.createComponent(HeaderColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
