import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastLateralComponent } from './podcast-lateral.component';

describe('PodcastLateralComponent', () => {
  let component: PodcastLateralComponent;
  let fixture: ComponentFixture<PodcastLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
