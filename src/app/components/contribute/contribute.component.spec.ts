import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeComponent } from './contribute.component';

describe('ContributeComponent', () => {
  let component: ContributeComponent;
  let fixture: ComponentFixture<ContributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
