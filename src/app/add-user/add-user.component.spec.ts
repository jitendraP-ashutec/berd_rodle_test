import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentDialog } from './add-user.component';

describe('AppComponentDialog', () => {
  let component: AppComponentDialog;
  let fixture: ComponentFixture<AppComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponentDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
