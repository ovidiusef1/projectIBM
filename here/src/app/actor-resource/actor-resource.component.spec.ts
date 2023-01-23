import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorResourceComponent } from './actor-resource.component';

describe('ActorResourceComponent', () => {
  let component: ActorResourceComponent;
  let fixture: ComponentFixture<ActorResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
