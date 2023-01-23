import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResourceComponent } from './movie-resource.component';

describe('MovieResourceComponent', () => {
  let component: MovieResourceComponent;
  let fixture: ComponentFixture<MovieResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
