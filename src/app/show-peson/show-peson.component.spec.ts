import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPesonComponent } from './show-peson.component';

describe('ShowPesonComponent', () => {
  let component: ShowPesonComponent;
  let fixture: ComponentFixture<ShowPesonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPesonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPesonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
