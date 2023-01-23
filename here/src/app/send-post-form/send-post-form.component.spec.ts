import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPostFormComponent } from './send-post-form.component';

describe('SendPostFormComponent', () => {
  let component: SendPostFormComponent;
  let fixture: ComponentFixture<SendPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPostFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
