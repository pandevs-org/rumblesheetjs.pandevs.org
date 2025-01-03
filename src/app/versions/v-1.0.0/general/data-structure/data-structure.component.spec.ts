import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureComponent } from './data-structure.component';

describe('DataStructureComponent', () => {
  let component: DataStructureComponent;
  let fixture: ComponentFixture<DataStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
