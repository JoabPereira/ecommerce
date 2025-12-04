import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card1MainComponent } from './card1-main.component';

describe('Card1MainComponent', () => {
  let component: Card1MainComponent;
  let fixture: ComponentFixture<Card1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
