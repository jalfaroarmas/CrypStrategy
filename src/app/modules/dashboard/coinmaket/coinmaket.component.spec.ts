import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinmaketComponent } from './coinmaket.component';

describe('CoinmaketComponent', () => {
  let component: CoinmaketComponent;
  let fixture: ComponentFixture<CoinmaketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinmaketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinmaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
