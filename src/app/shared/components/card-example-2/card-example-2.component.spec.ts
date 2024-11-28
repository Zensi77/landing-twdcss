import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample2Component } from './card-example-2.component';

describe('CardExample2Component', () => {
  let component: CardExample2Component;
  let fixture: ComponentFixture<CardExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
