import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensEditComponent } from './mens-edit.component';

describe('MensEditComponent', () => {
  let component: MensEditComponent;
  let fixture: ComponentFixture<MensEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
