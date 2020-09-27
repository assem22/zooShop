import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertainBreedComponent } from './certain-breed.component';

describe('CertainBreedComponent', () => {
  let component: CertainBreedComponent;
  let fixture: ComponentFixture<CertainBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertainBreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertainBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
