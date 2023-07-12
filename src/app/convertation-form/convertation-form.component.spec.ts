import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertationFormComponent } from './convertation-form.component';

describe('ConvertationFormComponent', () => {
  let component: ConvertationFormComponent;
  let fixture: ComponentFixture<ConvertationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
