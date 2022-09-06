import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenEditComponent } from './women-edit.component';

describe('WomenEditComponent', () => {
  let component: WomenEditComponent;
  let fixture: ComponentFixture<WomenEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
