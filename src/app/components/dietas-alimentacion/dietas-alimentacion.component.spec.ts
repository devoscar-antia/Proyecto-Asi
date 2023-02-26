import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietasAlimentacionComponent } from './dietas-alimentacion.component';

describe('DietasAlimentacionComponent', () => {
  let component: DietasAlimentacionComponent;
  let fixture: ComponentFixture<DietasAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietasAlimentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietasAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
